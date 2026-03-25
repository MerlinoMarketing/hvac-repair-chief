import type { SVGProps } from "react";

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

function SnowflakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2v20" />
      <path d="M12 6l-4-2M12 6l4-2" />
      <path d="M12 18l-4 2M12 18l4 2" />
      <path d="M2 12h20" />
      <path d="M6 12l-2-4M6 12l-2 4" />
      <path d="M18 12l2-4M18 12l2 4" />
      <path d="M4.93 4.93l14.14 14.14" />
      <path d="M7.76 7.76l-1.42-3.54M7.76 7.76l-3.54-1.42" />
      <path d="M16.24 16.24l1.42 3.54M16.24 16.24l3.54 1.42" />
    </svg>
  );
}

function ThermometerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
      <circle cx="11.5" cy="17.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="M11.5 14V7" />
    </svg>
  );
}

function FlameIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2c-2 4-6 6-6 11a6 6 0 0012 0c0-5-4-7-6-11z" />
      <path d="M12 22c-1.5 0-3-1.5-3-3.5 0-3 3-4.5 3-7 0 2.5 3 4 3 7 0 2-1.5 3.5-3 3.5z" />
    </svg>
  );
}

function WindIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.7 7.7A2.5 2.5 0 1019 12H2" />
      <path d="M9.6 4.6A2 2 0 1111 8H2" />
      <path d="M12.6 19.4A2 2 0 1014 16H2" />
    </svg>
  );
}

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01" />
      <path d="M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  );
}

function SirenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2v2" />
      <path d="M5 5l1.5 1.5" />
      <path d="M19 5l-1.5 1.5" />
      <path d="M6 12H4" />
      <path d="M20 12h-2" />
      <path d="M8 16H6c0-3.3 2.7-6 6-6s6 2.7 6 6h-2" />
      <rect x="7" y="16" width="10" height="4" rx="1" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

const iconMap: Record<string, IconComponent> = {
  snowflake: SnowflakeIcon,
  thermometer: ThermometerIcon,
  flame: FlameIcon,
  wind: WindIcon,
  calendar: CalendarIcon,
  siren: SirenIcon,
};

export function getServiceIcon(icon: string): IconComponent {
  return iconMap[icon] ?? SnowflakeIcon;
}

export function renderServiceIcon(icon: string, className: string = "size-5") {
  const Icon = getServiceIcon(icon);
  return <Icon className={className} />;
}
