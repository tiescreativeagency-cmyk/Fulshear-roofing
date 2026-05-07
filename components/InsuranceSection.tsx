import { site } from "@/content/site";

export function InsuranceSection() {
  return (
    <section
      className="border-t border-slate-200/80 bg-brand text-white"
      aria-labelledby="insurance-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 id="insurance-heading" className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {site.insurance.title}
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-200">
          {site.insurance.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-10">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 text-base font-semibold text-brand shadow-lg transition hover:bg-slate-100"
          >
            Talk with our team
          </a>
        </div>
      </div>
    </section>
  );
}
