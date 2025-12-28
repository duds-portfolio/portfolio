#!/usr/bin/env python3
"""
Script to migrate case studies from old portfolio to new Astro content collection format.
Extracts metadata, cleans HTML, and creates properly formatted markdown files.
"""

import re
import os
from pathlib import Path

def extract_metadata(content):
    """Extract metadata from markdown frontmatter and body."""
    metadata = {}
    
    # Extract from frontmatter
    frontmatter_match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
    if frontmatter_match:
        frontmatter = frontmatter_match.group(1)
        for line in frontmatter.split('\n'):
            if ':' in line:
                key, value = line.split(':', 1)
                key = key.strip()
                value = value.strip().strip('"')
                metadata[key] = value
    
    # Extract from body (Client, Industry, Duration, Year, Challenge)
    body = content.split('---', 2)[-1] if '---' in content else content
    
    client_match = re.search(r'\*\*Client:\*\*\s*(.+?)(?:\n|$)', body)
    if client_match:
        metadata['client'] = client_match.group(1).strip()
    
    industry_match = re.search(r'\*\*Industry:\*\*\s*(.+?)(?:\n|$)', body)
    if industry_match:
        metadata['industry'] = industry_match.group(1).strip()
    
    duration_match = re.search(r'\*\*Duration:\*\*\s*(.+?)(?:\n|$)', body)
    if duration_match:
        metadata['duration'] = duration_match.group(1).strip()
    
    year_match = re.search(r'\*\*Year:\*\*\s*(.+?)(?:\n|$)', body)
    if year_match:
        metadata['year'] = year_match.group(1).strip()
    
    challenge_match = re.search(r'\*\*Challenge:\*\*\s*(.+?)(?:\n|$)', body, re.DOTALL)
    if challenge_match:
        metadata['challenge'] = challenge_match.group(1).strip()
    
    # Extract tags from end
    tags_match = re.search(r'\*\*Tags:\*\*\s*(.+?)(?:\n|$)', body, re.DOTALL)
    if tags_match:
        tags_str = tags_match.group(1).strip()
        # Split by comma and clean
        tags = [tag.strip() for tag in tags_str.split(',') if tag.strip()]
        metadata['tags'] = tags
    
    # Determine category based on industry/client
    category_map = {
        'government': ['Government', 'Federal Government', 'Border Security', 'ASIC', 'DCCEEW', 'MDBA'],
        'regulatory': ['Regulatory', 'Regulation', 'ASIC', 'DCCEEW'],
        'education': ['Education', 'Higher Education', 'University'],
        'enterprise': ['Mining', 'Rio Tinto', 'Holden', 'General Motors'],
        'service-design': ['Service Design'],
        'policy': ['Policy', 'Regulatory']
    }
    
    industry_lower = metadata.get('industry', '').lower()
    client_lower = metadata.get('client', '').lower()
    
    for cat, keywords in category_map.items():
        if any(kw.lower() in industry_lower or kw.lower() in client_lower for kw in keywords):
            metadata['category'] = cat
            break
    else:
        metadata['category'] = 'service-design'  # default
    
    # Set featured based on title
    if 'antarctic' in metadata.get('title', '').lower():
        metadata['featured'] = True
    else:
        metadata['featured'] = False
    
    return metadata

def clean_html(content):
    """Remove HTML divs, classes, and convert to clean markdown."""
    # Remove HTML divs with classes
    content = re.sub(r'<div[^>]*class="[^"]*"[^>]*>', '', content)
    content = re.sub(r'</div>', '', content)
    
    # Convert blockquotes
    content = re.sub(r'<blockquote[^>]*class="insight-quote"[^>]*>\s*"([^"]+)"\s*</blockquote>', r'> \1', content)
    
    # Remove span elements
    content = re.sub(r'<span[^>]*>', '', content)
    content = re.sub(r'</span>', '', content)
    
    # Clean up results callout - convert to markdown list
    content = re.sub(
        r'<div class="results-callout">.*?<h3>Impact</h3>.*?<div class="results-grid">(.*?)</div>.*?</div>',
        lambda m: '\n## Impact\n\n' + re.sub(
            r'<div class="result-item">.*?<span class="result-number">(.*?)</span>.*?<span class="result-label">(.*?)</span>.*?</div>',
            r'- **\1** - \2',
            m.group(1),
            flags=re.DOTALL
        ),
        content,
        flags=re.DOTALL
    )
    
    # Remove case-study-section divs but keep content
    content = re.sub(r'<div class="case-study-section">\s*<span class="section-label">([^<]+)</span>', r'## \1', content)
    
    # Clean up any remaining HTML tags
    content = re.sub(r'<[^>]+>', '', content)
    
    # Clean up extra whitespace
    content = re.sub(r'\n{3,}', '\n\n', content)
    
    return content

def migrate_case_study(source_path, dest_path):
    """Migrate a single case study."""
    with open(source_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract metadata
    metadata = extract_metadata(content)
    
    # Clean content
    cleaned = clean_html(content)
    
    # Remove old frontmatter and extract body
    body_match = re.search(r'^---\n.*?\n---\n\n(.*)', cleaned, re.DOTALL)
    if body_match:
        body = body_match.group(1)
    else:
        body = cleaned
    
    # Remove metadata lines from body (Client, Industry, etc.)
    body = re.sub(r'\*\*Client:\*\*.*?\n', '', body)
    body = re.sub(r'\*\*Industry:\*\*.*?\n', '', body)
    body = re.sub(r'\*\*Duration:\*\*.*?\n', '', body)
    body = re.sub(r'\*\*Year:\*\*.*?\n', '', body)
    body = re.sub(r'\*\*Type:\*\*.*?\n', '', body)
    body = re.sub(r'\*\*Challenge:\*\*.*?\n', '', body, flags=re.DOTALL)
    body = re.sub(r'\*\*Tags:\*\*.*?\n', '', body, flags=re.DOTALL)
    
    # Create new frontmatter
    frontmatter = "---\n"
    frontmatter += f'title: "{metadata.get("title", "")}"\n'
    frontmatter += f'description: "{metadata.get("description", "")}"\n'
    if metadata.get('keywords'):
        frontmatter += f'keywords: "{metadata.get("keywords", "")}"\n'
    if metadata.get('ogImage'):
        frontmatter += f'ogImage: "{metadata.get("ogImage", "")}"\n'
    frontmatter += f'client: "{metadata.get("client", "")}"\n'
    frontmatter += f'industry: "{metadata.get("industry", "")}"\n'
    frontmatter += f'duration: "{metadata.get("duration", "")}"\n'
    frontmatter += f'year: "{metadata.get("year", "")}"\n'
    frontmatter += f'challenge: "{metadata.get("challenge", "")}"\n'
    
    if metadata.get('tags'):
        frontmatter += 'tags:\n'
        for tag in metadata['tags']:
            frontmatter += f'  - "{tag}"\n'
    else:
        frontmatter += 'tags: []\n'
    
    frontmatter += f'featured: {str(metadata.get("featured", False)).lower()}\n'
    frontmatter += f'category: "{metadata.get("category", "service-design")}"\n'
    frontmatter += "---\n\n"
    
    # Write new file
    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(frontmatter + body)
    
    print(f"Migrated: {source_path.name} -> {dest_path.name}")

def main():
    source_dir = Path('../old-portfolio/case-studies')
    dest_dir = Path('src/content/case-studies')
    
    dest_dir.mkdir(parents=True, exist_ok=True)
    
    for md_file in source_dir.glob('*.md'):
        dest_file = dest_dir / md_file.name
        migrate_case_study(md_file, dest_file)
    
    print(f"\nMigration complete! Migrated {len(list(source_dir.glob('*.md')))} case studies.")

if __name__ == '__main__':
    main()

