/** Renders text with *asterisks* around words as italic display emphasis. */
export function Emphasis({ text }: { text: string }) {
  return text.split('*').map((part, index) =>
    index % 2 === 1 ? (
      <em key={index} className="italic">
        {part}
      </em>
    ) : (
      part
    ),
  )
}
