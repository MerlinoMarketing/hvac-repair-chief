import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const servicesDirectory = path.join(process.cwd(), 'content', 'pages');

// Replace template placeholders with real business info
function replaceTemplatePlaceholders(content: string): string {
  const replacements: Record<string, string> = {
    '[City]': 'Fort Lauderdale',
    '[State]': 'FL',
    '[Brand Name]': 'HVAC Repair Chief',
    '[Phone]': '(954) 555-0123',
    '[Phone Number]': '(954) 555-0123',
    '[SMS Number]': '(954) 555-0123',
    '[X]': '20',
    '[City 1]': 'Deerfield Beach',
    '[City 2]': 'Pompano Beach',
    '[City 3]': 'Coral Springs',
    '[County]': 'Broward County',
    '[CTA Button]': '',
  };

  let result = content;

  // Normalize line endings
  result = result.replace(/\r\n/g, '\n');

  for (const [placeholder, value] of Object.entries(replacements)) {
    result = result.split(placeholder).join(value);
  }

  // Remove {{LINK:...}} markers and just show the text
  result = result.replace(/\{\{LINK:[^|]+\|([^}]+)\}\}/g, '$1');

  // Remove the first title line (e.g., "# AC Installation Services in Pompano Beach, FL")
  result = result.replace(/^# .+Services in .+\n+/, '');

  // Remove page type metadata block at top
  result = result.replace(/\*\*Page Type:\*\*.+\n/g, '');
  result = result.replace(/\*\*URL:\*\*.+\n/g, '');
  result = result.replace(/\*\*Last Updated:\*\*.+\n/g, '');

  // Remove SEO METADATA section (everything between ## SEO METADATA and the next ---)
  result = result.replace(/## SEO METADATA[\s\S]*?---\s*\n/g, '');

  // Remove SCHEMA MARKUP section at the end
  result = result.replace(/## SCHEMA MARKUP[\s\S]*$/g, '');

  // Remove Related Resources section (we'll handle internal linking differently)
  result = result.replace(/## Related Resources[\s\S]*?(?=##|$)/g, '');

  // Clean up excessive dashes/dividers
  result = result.replace(/\n---\s*\n+/g, '\n\n');

  // Clean up multiple consecutive newlines
  result = result.replace(/\n{3,}/g, '\n\n');

  // Trim leading whitespace
  result = result.trim();

  return result;
}

export interface Service {
  slug: string;
  title: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  content: string;
  htmlContent?: string;
}

export function getServiceSlugs(): string[] {
  const files = fs.readdirSync(servicesDirectory);
  return files
    .filter(file => file.startsWith('service-') && file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, '').replace(/^service-/, ''));
}

export function getServiceBySlug(slug: string): Service | null {
  try {
    const fullPath = path.join(servicesDirectory, `service-${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content: rawContent } = matter(fileContents);

    // Replace template placeholders with real values
    const content = replaceTemplatePlaceholders(rawContent);

    // Extract title from first H1 in content
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = data.title || (titleMatch ? titleMatch[1] : slug.replace(/-/g, ' '));

    // Extract meta title from the Title Tag section
    const metaTitleMatch = content.match(/\*\*(.+?)\*\*\s*$/m);
    let metaTitle = data.metaTitle || (metaTitleMatch ? metaTitleMatch[1] : title);
    // Clean up meta title
    metaTitle = replaceTemplatePlaceholders(metaTitle);

    // Extract meta description from the Meta Description section
    const metaDescMatch = content.match(/### Meta Description[^*]*\*\*(.+?)\*\*/);
    let metaDescription = data.metaDescription || (metaDescMatch ? metaDescMatch[1] : '');
    metaDescription = replaceTemplatePlaceholders(metaDescription);

    // Extract Quick Answer as description
    const quickAnswerMatch = content.match(/\*\*Quick Answer:\*\*\s*([\s\S]+?)(?=\n\n|$)/);
    const description = data.description || (quickAnswerMatch ? quickAnswerMatch[1].trim() : metaDescription);

    return {
      slug,
      title: replaceTemplatePlaceholders(title),
      description: replaceTemplatePlaceholders(description),
      metaTitle,
      metaDescription,
      content,
    };
  } catch {
    return null;
  }
}

export async function getServiceWithHtml(slug: string): Promise<Service | null> {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const processedContent = await remark()
    .use(html)
    .process(service.content);

  return {
    ...service,
    htmlContent: processedContent.toString(),
  };
}

export function getAllServices(): Service[] {
  const slugs = getServiceSlugs();
  return slugs
    .map(slug => getServiceBySlug(slug))
    .filter((service): service is Service => service !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}
