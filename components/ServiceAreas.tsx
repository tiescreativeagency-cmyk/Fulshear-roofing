"use client";

import { useMemo, useState } from "react";
import { site } from "@/content/site";

export function ServiceAreas() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [...site.serviceAreas];
    return site.serviceAreas.filter((a) => a.toLowerCase().includes(q));
  }, [query]);

  return (
    <section
      id="areas"
      className="border-t border-slate-200/80 bg-slate-50/80 scroll-mt-24"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 id="areas-heading" className="font-serif text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
          Areas we serve
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Proudly working in neighborhoods across the region—including the communities below.
        </p>
        <div className="mt-8">
          <label htmlFor="area-search" className="sr-only">
            Search service areas
          </label>
          <input
            id="area-search"
            type="search"
            autoComplete="off"
            placeholder="Search your city…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-md rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 min-h-12"
          />
        </div>
        {filtered.length === 0 ? (
          <p className="mt-6 text-slate-600">No matches. Try another spelling or call us—we may still serve your area.</p>
        ) : (
          <ul className="mt-8 columns-1 gap-x-10 gap-y-2 sm:columns-2 lg:columns-3">
            {filtered.map((area) => (
              <li key={area} className="break-inside-avoid py-1 text-slate-700">
                {area}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
