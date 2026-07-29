import PapelPicado from "./PapelPicado";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-secondary pb-16 pt-24 text-white sm:pb-20 sm:pt-28">
      <PapelPicado className="absolute inset-x-0 top-0" />
      <div
        className="absolute -right-24 -top-8 h-72 w-72 rounded-full border-[45px] border-white/5"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-brand-primary/20"
        aria-hidden="true"
      />
      <div className="site-container relative text-center">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-brand-accent">
          {eyebrow}
        </p>
        <h1 className="text-5xl leading-none text-white sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
          {intro}
        </p>
      </div>
    </section>
  );
}
