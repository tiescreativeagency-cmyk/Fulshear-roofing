import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      className="relative isolate min-h-[28rem] overflow-hidden border-b border-slate-200/80 sm:min-h-[32rem] lg:min-h-[36rem]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/hero-roof.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        {/* Darken primarily on the left where copy sits so text stays readable over the busy roof/pool photo */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/[0.72] via-45% to-slate-900/30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-slate-950/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
          Greater Houston &amp; Fulshear
        </p>
        <h1
          id="hero-heading"
          className="mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_4px_rgba(0,0,0,.55),0_4px_24px_rgba(0,0,0,.45)]"
        >
          {site.hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white sm:text-xl [text-shadow:0_1px_3px_rgba(0,0,0,.75),0_2px_16px_rgba(0,0,0,.35)]">
          {site.hero.subhead}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-6 text-base font-semibold text-brand shadow-lg shadow-black/20 transition hover:bg-accent-hover active:scale-[0.99]"
          >
            Call {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Free roof inspection request")}`}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/35 bg-white/95 px-6 text-base font-semibold text-brand shadow-sm backdrop-blur-sm transition hover:bg-white"
          >
            Schedule inspection
          </a>
          <a
            href="#services"
            className="inline-flex min-h-12 items-center justify-center px-2 text-base font-semibold text-white underline decoration-white/45 underline-offset-4 hover:decoration-white"
          >
            View services
          </a>
        </div>
      </div>
    </section>
  );
}
