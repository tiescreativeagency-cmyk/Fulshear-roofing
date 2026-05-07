import { site } from "@/content/site";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="border-y border-slate-200/80 bg-white scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="font-serif text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
          Common questions about roofing in Greater Houston
        </h2>
        <p className="mt-3 max-w-3xl text-lg text-slate-600">
          Straight answers people often ask before calling a roofer—grounded in what Fulshear Roofing offers and how to
          reach the team.
        </p>
        <div className="mt-10 max-w-3xl space-y-3">
          {site.faq.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm open:shadow-md"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-serif text-base font-semibold text-brand outline-none transition-colors hover:bg-slate-50 sm:text-lg [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                <span className="pr-2">{item.question}</span>
                <ChevronIcon
                  className="size-5 shrink-0 text-slate-500 transition-transform duration-200 ease-out group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <div className="border-t border-slate-100 px-5 pb-4 pt-3 text-base leading-relaxed text-slate-600">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ className, "aria-hidden": ariaHidden }: { className?: string; "aria-hidden"?: boolean }) {
  return (
    <svg
      className={className}
      aria-hidden={ariaHidden}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
