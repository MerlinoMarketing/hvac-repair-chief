import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export function Breadcrumb({ items, dark }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={`flex flex-wrap items-center gap-1 text-sm ${dark ? "text-white/50" : "text-gray-500"}`}>
        {allItems.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className={`size-3.5 ${dark ? "text-white/30" : "text-gray-300"}`} />}
            {item.href && index < allItems.length - 1 ? (
              <Link
                href={item.href}
                className={`transition ${dark ? "hover:text-white" : "hover:text-gray-900"}`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={`font-medium ${dark ? "text-white/80" : "text-gray-900"}`}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
