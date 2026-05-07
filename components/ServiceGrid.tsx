import { site } from "@/content/site";

export function ServiceGrid() {
  return (
    <section
      id="services"
      className="border-y border-slate-200/80 bg-slate-50/80 scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="font-serif text-3xl font-semibold tracking-tight text-brand sm:text-4xl"
        >
          Services
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">{site.servicesIntro}</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s) => (
            <li
              key={s.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand">{s.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
