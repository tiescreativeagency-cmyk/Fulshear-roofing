import { site } from "@/content/site";

export function MaterialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="materials-heading">
      <h2
        id="materials-heading"
        className="font-serif text-3xl font-semibold tracking-tight text-brand sm:text-4xl"
      >
        {site.materials.title}
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">{site.materials.note}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
        {site.materials.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-800 shadow-sm"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/25 text-brand">
              <CheckIcon className="size-4" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
