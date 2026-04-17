import { getCollection } from 'astro:content';

export interface TagInfo {
  name: string;
  count: number;
  slug: string;
}

export interface TaggedContent {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'blog' | 'case-study';
  pubDate?: Date;
  year?: string;
}

/**
 * Get all unique tags from blog posts and case studies
 */
export async function getAllTags(): Promise<TagInfo[]> {
  const blogPosts = await getCollection('blog');
  const caseStudies = await getCollection('caseStudies');

  const tagMap = new Map<string, number>();

  // Count tags from blog posts
  blogPosts.forEach((post) => {
    const tags = post.data.tags || [];
    tags.forEach((tag) => {
      const normalizedTag = tag.toLowerCase().trim();
      tagMap.set(normalizedTag, (tagMap.get(normalizedTag) || 0) + 1);
    });
  });

  // Count tags from case studies
  caseStudies.forEach((study) => {
    const tags = study.data.tags || [];
    tags.forEach((tag) => {
      const normalizedTag = tag.toLowerCase().trim();
      tagMap.set(normalizedTag, (tagMap.get(normalizedTag) || 0) + 1);
    });
  });

  // Convert to array and sort by count (descending), then alphabetically
  const tags: TagInfo[] = Array.from(tagMap.entries())
    .map(([name, count]) => ({
      name,
      count,
      slug: encodeURIComponent(name),
    }))
    .sort((a, b) => {
      // First sort by count (descending)
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      // Then alphabetically
      return a.name.localeCompare(b.name);
    });

  return tags;
}

/**
 * Get all content tagged with a specific tag
 */
export async function getContentByTag(tagSlug: string): Promise<{
  tag: string;
  content: TaggedContent[];
}> {
  const blogPosts = await getCollection('blog');
  const caseStudies = await getCollection('caseStudies');

  const normalizedTag = decodeURIComponent(tagSlug).toLowerCase().trim();
  const content: TaggedContent[] = [];

  // Find blog posts with this tag
  blogPosts.forEach((post) => {
    const tags = (post.data.tags || []).map((t) => t.toLowerCase().trim());
    if (tags.includes(normalizedTag)) {
      content.push({
        id: post.id,
        title: post.data.title,
        description: post.data.description,
        url: `/articles/${post.id}`,
        type: 'blog',
        pubDate: post.data.pubDate,
      });
    }
  });

  // Find case studies with this tag
  caseStudies.forEach((study) => {
    const tags = (study.data.tags || []).map((t) => t.toLowerCase().trim());
    if (tags.includes(normalizedTag)) {
      content.push({
        id: study.id,
        title: study.data.title,
        description: study.data.description,
        url: `/case-studies/${study.id}`,
        type: 'case-study',
        year: study.data.year,
      });
    }
  });

  // Sort content: blog posts by date (newest first), then case studies by year (newest first)
  content.sort((a, b) => {
    if (a.type === 'blog' && b.type === 'blog') {
      const dateA = a.pubDate?.getTime() || 0;
      const dateB = b.pubDate?.getTime() || 0;
      return dateB - dateA;
    }
    if (a.type === 'case-study' && b.type === 'case-study') {
      const yearA = parseInt(a.year || '0') || 0;
      const yearB = parseInt(b.year || '0') || 0;
      return yearB - yearA;
    }
    // Blog posts before case studies
    if (a.type === 'blog') return -1;
    if (b.type === 'blog') return 1;
    return 0;
  });

  // Get the original tag name (preserving case from first occurrence)
  let originalTagName = normalizedTag;
  blogPosts.forEach((post) => {
    const tags = post.data.tags || [];
    const found = tags.find((t) => t.toLowerCase().trim() === normalizedTag);
    if (found) {
      originalTagName = found;
      return;
    }
  });
  if (originalTagName === normalizedTag) {
    caseStudies.forEach((study) => {
      const tags = study.data.tags || [];
      const found = tags.find((t) => t.toLowerCase().trim() === normalizedTag);
      if (found) {
        originalTagName = found;
        return;
      }
    });
  }

  return {
    tag: originalTagName,
    content,
  };
}

