export interface SearchResult {
  type: 'blog' | 'case-study';
  id: string;
  title: string;
  description: string;
  url: string;
  category?: string;
  tags?: string[];
}

export interface SearchableItem {
  id: string;
  title: string;
  description: string;
  content?: string;
  tags?: string[];
  keywords?: string;
  category?: string;
}

/**
 * Simple text search function that searches across title, description, content, tags, and keywords
 */
export function searchItems(
  query: string,
  blogPosts: SearchableItem[],
  caseStudies: SearchableItem[]
): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Search blog posts
  blogPosts.forEach((post) => {
    const score = calculateRelevanceScore(post, searchTerm);
    if (score > 0) {
      results.push({
        type: 'blog',
        id: post.id,
        title: post.title,
        description: post.description,
        url: `/articles/${post.id}/`,
        tags: post.tags,
      });
    }
  });

  // Search case studies
  caseStudies.forEach((study) => {
    const score = calculateRelevanceScore(study, searchTerm);
    if (score > 0) {
      results.push({
        type: 'case-study',
        id: study.id,
        title: study.title,
        description: study.description,
        url: `/case-studies/${study.id}/`,
        category: study.category,
        tags: study.tags,
      });
    }
  });

  // Sort by relevance (higher score first)
  results.sort((a, b) => {
    const aItem = [...blogPosts, ...caseStudies].find((item) => item.id === a.id);
    const bItem = [...blogPosts, ...caseStudies].find((item) => item.id === b.id);
    if (!aItem || !bItem) return 0;
    return calculateRelevanceScore(bItem, searchTerm) - calculateRelevanceScore(aItem, searchTerm);
  });

  return results;
}

/**
 * Calculate relevance score for a search term
 * Higher score = more relevant
 */
function calculateRelevanceScore(item: SearchableItem, searchTerm: string): number {
  let score = 0;
  const searchTerms = searchTerm.split(/\s+/).filter((t) => t.length > 0);

  // Title match (highest weight)
  const titleLower = item.title.toLowerCase();
  if (titleLower.includes(searchTerm)) {
    score += 10;
  }
  searchTerms.forEach((term) => {
    if (titleLower.includes(term)) {
      score += 5;
    }
    // Exact word match in title
    if (titleLower.split(/\s+/).includes(term)) {
      score += 3;
    }
  });

  // Description match
  const descLower = item.description.toLowerCase();
  if (descLower.includes(searchTerm)) {
    score += 5;
  }
  searchTerms.forEach((term) => {
    if (descLower.includes(term)) {
      score += 2;
    }
  });

  // Content match (if available)
  if (item.content) {
    const contentLower = item.content.toLowerCase();
    searchTerms.forEach((term) => {
      const matches = (contentLower.match(new RegExp(term, 'g')) || []).length;
      score += Math.min(matches, 3); // Cap at 3 points per term
    });
  }

  // Tags match
  if (item.tags && item.tags.length > 0) {
    const tagsLower = item.tags.map((t) => t.toLowerCase());
    searchTerms.forEach((term) => {
      if (tagsLower.some((tag) => tag.includes(term))) {
        score += 4;
      }
    });
  }

  // Keywords match
  if (item.keywords) {
    const keywordsLower = item.keywords.toLowerCase();
    searchTerms.forEach((term) => {
      if (keywordsLower.includes(term)) {
        score += 3;
      }
    });
  }

  return score;
}

/**
 * Highlight search terms in text
 */
export function highlightSearchTerms(text: string, searchTerm: string): string {
  if (!searchTerm || searchTerm.trim().length === 0) {
    return text;
  }

  const terms = searchTerm
    .split(/\s+/)
    .filter((t) => t.length > 0)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // Escape regex special chars

  if (terms.length === 0) {
    return text;
  }

  const regex = new RegExp(`(${terms.join('|')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

