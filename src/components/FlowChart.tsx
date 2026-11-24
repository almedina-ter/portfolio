import { ArrowDown } from "lucide-react";
import type { FlowArea } from "../content/types";
import { scrollToId } from "../lib/scroll";

/**
 * A product map: the product at the top, its areas beneath it, and for each area the screens
 * and the views inside them. Built from real lists, so it follows the theme, reads in order
 * with a screen reader, and stacks on narrow screens.
 */
export function FlowChart({
  root,
  areas,
}: {
  root: string;
  areas: FlowArea[];
}) {
  return (
    <div className="rounded-lg border border-line bg-surface/40 p-5 sm:p-8">
      <p className="inline-flex rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper">
        {root}
      </p>
      <span aria-hidden="true" className="ml-5 block h-5 w-px bg-line-strong" />

      <ul className="ml-5">
        {areas.map((area, areaIndex) => {
          const last = areaIndex === areas.length - 1;
          return (
            <li
              key={area.name}
              className={`relative pl-8 ${last ? "" : "pb-12"}`}
            >
              {/* Trunk and branch: the vertical line runs through every area and ends at the last one. */}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-0 w-px bg-line-strong ${last ? "h-5" : "h-full"}`}
              />
              <span
                aria-hidden="true"
                className="absolute top-5 left-0 h-px w-6 bg-line-strong"
              />

              <div className="grid gap-x-8 gap-y-4 lg:grid-cols-[11.5rem_minmax(0,1fr)]">
                <div>
                  {area.to ? (
                    <button
                      type="button"
                      onClick={() => scrollToId(area.to!)}
                      className="rounded-full border border-ink px-4 py-1.5 text-sm font-medium text-ink transition-colors duration-(--duration-micro) hover:bg-ink hover:text-paper"
                    >
                      {area.name}
                    </button>
                  ) : (
                    <p className="inline-flex rounded-full border border-ink px-4 py-1.5 text-sm font-medium">
                      {area.name}
                    </p>
                  )}
                  {area.note && (
                    <p className="mt-3 max-w-[22ch] text-sm text-ink-subtle">
                      {area.note}
                    </p>
                  )}
                </div>

                <ul className="space-y-3">
                  {area.screens.map((screen) => (
                    <li key={screen.name}>
                      {screen.trigger && (
                        <p className="mb-3 flex items-center gap-2 text-sm text-ink-muted">
                          <ArrowDown
                            aria-hidden="true"
                            className="size-4 shrink-0 text-accent"
                          />
                          {screen.trigger}
                        </p>
                      )}
                      <div className="grid gap-x-3 gap-y-2 sm:grid-cols-[11rem_1.5rem_minmax(0,1fr)] sm:items-start">
                        <span className="rounded-lg border border-line-strong bg-paper px-4 py-2 text-[0.9375rem] font-medium sm:w-full">
                          {screen.name}
                        </span>
                        {screen.views && (
                          <>
                            <span
                              aria-hidden="true"
                              className="mt-[1.1rem] hidden h-px w-full bg-line-strong sm:block"
                            />
                            <ul className="flex flex-wrap gap-2 sm:pt-1">
                              {screen.views.map((view) => (
                                <li
                                  key={view}
                                  className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-ink-muted"
                                >
                                  {view}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
