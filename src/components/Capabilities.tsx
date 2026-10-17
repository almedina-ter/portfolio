import type { Capability } from '../content/types'
import { Reveal } from './Reveal'

export function Capabilities({ capabilities }: { capabilities: Capability[] }) {
  return (
    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {capabilities.map((capability, index) => (
        <Reveal key={capability.title} delay={index * 90}>
          <h3 className="border-b border-line pb-3 font-medium">{capability.title}</h3>
          <ul className="mt-4 space-y-2 text-ink-muted">
            {capability.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  )
}
