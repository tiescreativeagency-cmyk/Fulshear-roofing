import { site } from "@/content/site";

export function ContactFooter() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`;

  return (
    <footer id="contact" className="border-t border-slate-200/80 bg-white scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-brand">Contact</h2>
            <p className="mt-3 text-lg text-slate-600">
              Ready to get started? Call for a free roof inspection or send us a note—we will respond quickly.
            </p>
            <ul className="mt-8 space-y-4 text-lg">
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wide text-slate-500">Phone</span>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-semibold text-brand underline decoration-slate-200 underline-offset-4 hover:decoration-brand"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wide text-slate-500">Email</span>
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-brand underline decoration-slate-200 underline-offset-4 hover:decoration-brand break-all"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wide text-slate-500">Office</span>
                <address className="not-italic text-slate-700">
                  {site.address.street}
                  <br />
                  {site.address.cityLine}
                </address>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-base font-semibold text-accent hover:text-accent-hover hover:underline"
                >
                  Open in Google Maps
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="font-serif text-xl font-semibold text-brand">{site.name}</p>
            <p className="mt-2 text-slate-600">
              Locally owned roofing contractor serving beautiful homes and businesses across the Greater Fulshear area
              and beyond.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl bg-accent px-5 text-base font-semibold text-brand shadow-md transition hover:bg-accent-hover"
              >
                Call now
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-base font-semibold text-brand shadow-sm transition hover:bg-white"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        <p className="mt-14 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">{site.copyright}</p>
      </div>
    </footer>
  );
}
