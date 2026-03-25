type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "stagger-up max-w-2xl space-y-4",
        align === "center" ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.3em]">
        {eyebrow}
      </p>
      <h2 className="font-display text-balance font-semibold tracking-tight text-gray-900">
        {title}
      </h2>
      <p className="text-pretty text-base leading-relaxed text-gray-600 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}
