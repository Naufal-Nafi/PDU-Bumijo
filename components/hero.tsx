interface HeroProps {
    title: string;
    description: string;
}

export function Hero({ title, description}: HeroProps) {
  return (
    <section className="px-6 py-20 text-center md:py-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-fraunces text-4xl font-semibold text-dark-primary md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base text-dark-primary/80 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}