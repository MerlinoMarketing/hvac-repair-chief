import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Article {
  slug: string;
  title: string;
  description?: string;
  content: string;
  htmlContent?: string;
  category?: string;
  metaTitle?: string;
  metaDescription?: string;
  lastUpdated?: string;
}

export interface ArticleCategory {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

// Define article categories
export const categories: ArticleCategory[] = [
  {
    name: 'HVAC Materials',
    slug: 'HVAC-materials',
    description: 'Comprehensive guides on different HVAC materials and their benefits',
    icon: '🏗️',
  },
  {
    name: 'AC Repair & Maintenance',
    slug: 'repair-maintenance',
    description: 'Expert advice on maintaining and repairing your HVAC system',
    icon: '🔧',
  },
  {
    name: 'Emergency Services',
    slug: 'emergency',
    description: 'Quick response guides for AC emergencies and breakdowns',
    icon: '⚠️',
  },
  {
    name: 'Insurance & Claims',
    slug: 'insurance',
    description: 'Navigate HVAC warranty claims and service contracts',
    icon: '📋',
  },
  {
    name: 'Cost & Planning',
    slug: 'cost-planning',
    description: 'Cost guides and planning resources for HVAC projects',
    icon: '💰',
  },
  {
    name: 'Contractor Selection',
    slug: 'contractor',
    description: 'How to choose and work with HVAC contractors',
    icon: '👷',
  },
];

// Categorize articles based on their slug/content
function getCategoryForArticle(slug: string): string {
  const materialGuides = ['central-ac', 'ductless-mini-split', 'heat-pump', 'ultimate-HVAC-materials', 'hvac-equipment-types'];
  const repairGuides = ['ac-repair-guide', 'hvac-maintenance', 'seasonal-hvac-maintenance', 'common-HVAC-problems', 'ac-repair-vs-replacement', 'signs-you-need-ac-installation'];
  const emergencyGuides = ['emergency-ac-breakdown', 'hail-damage', 'emergency-hvac'];
  const insuranceGuides = ['emergency-hvac-insurance', 'working-with-insurance-adjusters', 'understanding-hvac-warranties'];
  const costGuides = ['ac-installation-cost'];
  const contractorGuides = ['how-to-choose-HVAC-contractor'];

  if (materialGuides.some(keyword => slug.includes(keyword))) return 'HVAC-materials';
  if (repairGuides.some(keyword => slug.includes(keyword))) return 'repair-maintenance';
  if (emergencyGuides.some(keyword => slug.includes(keyword))) return 'emergency';
  if (insuranceGuides.some(keyword => slug.includes(keyword))) return 'insurance';
  if (costGuides.some(keyword => slug.includes(keyword))) return 'cost-planning';
  if (contractorGuides.some(keyword => slug.includes(keyword))) return 'contractor';

  return 'repair-maintenance'; // default category
}

export function getArticleSlugs(): string[] {
  const files = fs.readdirSync(contentDirectory);
  return files
    .filter(file => {
      // Only include markdown files from the root content directory
      // Exclude files in subdirectories and answer-pages files
      if (!file.endsWith('.md')) return false;
      if (file.startsWith('answer-pages-')) return false;

      // Make sure it's not in a subdirectory
      const fullPath = path.join(contentDirectory, file);
      const stat = fs.statSync(fullPath);
      return stat.isFile();
    })
    .map(file => file.replace(/\.md$/, ''));
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Extract title from first H1 or frontmatter
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = data.title || (titleMatch ? titleMatch[1] : slug.replace(/-/g, ' '));

    // Extract description from frontmatter or first paragraph after title
    let description = data.description || '';
    if (!description) {
      const contentAfterTitle = content.replace(/^#\s+.+$/m, '').trim();
      // Match first paragraph (non-heading, non-bold marker text)
      const paragraphs = contentAfterTitle.split(/\n\n/);
      const firstParagraph = paragraphs.find(p => !p.startsWith('#') && !p.startsWith('**') && p.trim().length > 0);
      if (firstParagraph) {
        description = firstParagraph.replace(/\*\*/g, '').substring(0, 160);
      }
    }

    // Extract last updated date
    const lastUpdatedMatch = content.match(/\*\*Last Updated:\s*(.+?)\*\*/);
    const lastUpdated = data.lastUpdated || (lastUpdatedMatch ? lastUpdatedMatch[1] : undefined);

    return {
      slug,
      title,
      description,
      content,
      category: data.category || getCategoryForArticle(slug),
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription || description,
      lastUpdated,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export async function getArticleWithHtml(slug: string): Promise<Article | null> {
  const article = getArticleBySlug(slug);
  if (!article) return null;

  try {
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(article.content);

    return {
      ...article,
      htmlContent: processedContent.toString(),
    };
  } catch (error) {
    console.error(`Error processing article ${slug}:`, error);
    return article;
  }
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs();
  return slugs
    .map(slug => getArticleBySlug(slug))
    .filter((article): article is Article => article !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  const allArticles = getAllArticles();
  return allArticles.filter(article => article.category === categorySlug);
}

export function getCategoryBySlug(slug: string): ArticleCategory | undefined {
  return categories.find(cat => cat.slug === slug);
}
