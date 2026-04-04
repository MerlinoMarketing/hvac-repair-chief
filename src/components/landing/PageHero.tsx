import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHero({ title, subtitle, image = '/images/hero/hvac-hero.jpg' }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
