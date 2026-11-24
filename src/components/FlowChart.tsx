import { ArrowDown } from 'lucide-react'
import type { FlowArea } from '../content/types'
import { scrollToId } from '../lib/scroll'

/** Height of a screen box. The connector lines meet every box at half this height. */
const BOX = 'h-[2.65rem]'
const CENTER = 'top-[1.325rem]'

type Step = { kind: 'screen' | 'trigger'; text: string; views?: string[] }

/**
 * A product map: the product at the top, its areas beneath it, and for each area the screens
 * and the views inside them. Each area is joined to its screens by a line that branches into
 * every screen. Built from real lists, so it follows the theme, reads in order with a screen
 * reader, and stacks on narrow screens (without the lines).
 */
export function FlowChart({ root, areas }: { root: string; areas: FlowArea[] }) {
  return (
    <div className="rounded-lg border border-line bg-surface/40 p-5 sm:p-8">
      <p className="inline-flex rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper">{root}</p>
      <span aria-hidden="true" className="ml-5 block h-5 w-px bg-line-strong" />

      <ul className="ml-5">
        {areas.map((area, areaIndex) => {
          const lastArea = areaIndex === areas.length - 1
          // Screens, with the action that leads into a screen shown just before it.
          const steps: Step[] = area.screens.flatMap((screen) => [
            ...(screen.trigger ? [{ kind: 'trigger' as const, text: screen.trigger }] : []),
            { kind: 'screen' as const, text: screen.name, views: screen.views },
          ])
          const lastScreen = steps.map((step) => step.kind).lastIndexOf('screen')

          return (
            <li key={area.name} className={`relative pl-8 ${lastArea ? '' : 'pb-12'}`}>
              {/* Trunk and branch: the vertical line runs through every area and ends at the last one. */}
              <span aria-hidden="true" className={`absolute top-0 left-0 w-px bg-line-strong ${lastArea ? 'h-5' : 'h-full'}`} />
              <span aria-hidden="true" className="absolute top-5 left-0 h-px w-6 bg-line-strong" />

              <div className="grid gap-y-4 lg:grid-cols-[11.5rem_minmax(0,1fr)]">
                {/* The area, with a line running on to its screens. */}
                <div className={`relative flex items-center ${BOX}`}>
                  {area.to ? (
                    <button
                      type="button"
                      onClick={() => scrollToId(area.to!)}
                      className="shrink-0 rounded-full border border-ink px-4 py-1.5 text-sm font-medium text-ink transition-colors duration-(--duration-micro) hover:bg-ink hover:text-paper"
                    >
                      {area.name}
                    </button>
                  ) : (
                    <p className="shrink-0 rounded-full border border-ink px-4 py-1.5 text-sm font-medium">{area.name}</p>
                  )}
                  <span aria-hidden="true" className="ml-0 hidden h-px flex-1 bg-line-strong lg:block" />
                  {/* On phones the area joins its screens with a short line down to the bracket. */}
                  <span aria-hidden="true" className="absolute top-[2.3rem] left-4 h-[1.35rem] w-px bg-line-strong lg:hidden" />
                </div>

                <ul className="ml-4 lg:ml-0">
                  {steps.map((step, i) => {
                    const first = i === 0
                    const last = i === lastScreen
                    if (step.kind === 'trigger') {
                      return (
                        <li key={`t${i}`} className="relative pb-3 pl-5 lg:pl-8">
                          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-line-strong" />
                          <p className="flex items-center gap-2 text-sm text-ink-muted">
                            <ArrowDown aria-hidden="true" className="size-4 shrink-0 text-accent" />
                            {step.text}
                          </p>
                        </li>
                      )
                    }
                    return (
                      <li key={step.text} className={`relative pl-5 lg:pl-8 ${last ? '' : 'pb-3'}`}>
                        {/* Vertical bracket through the screens, and a tick into this box. */}
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 w-px bg-line-strong ${
                            first && last
                              ? 'top-0 h-[1.325rem] lg:hidden'
                              : first
                                ? 'top-0 bottom-0 lg:top-[1.325rem]'
                                : last
                                  ? 'top-0 h-[1.325rem]'
                                  : 'inset-y-0'
                          }`}
                        />
                        <span aria-hidden="true" className={`absolute left-0 h-px w-5 bg-line-strong lg:w-8 ${CENTER}`} />

                        <div className="grid gap-x-3 gap-y-2 sm:grid-cols-[11rem_1.5rem_minmax(0,1fr)] sm:items-start">
                          <span
                            className={`flex items-center rounded-lg border border-line-strong bg-paper px-4 text-[0.9375rem] font-medium ${BOX}`}
                          >
                            {step.text}
                          </span>
                          {step.views && (
                            <>
                              <span aria-hidden="true" className="mt-[1.3rem] hidden h-px w-full bg-line-strong sm:block" />
                              <ul className="flex flex-wrap gap-2 sm:pt-[0.45rem]">
                                {step.views.map((view) => (
                                  <li key={view} className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-ink-muted">
                                    {view}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
