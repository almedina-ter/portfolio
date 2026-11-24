/** Renders text as it is. Any *asterisks* are dropped, because the portfolio uses no italic type. */
export function Emphasis({ text }: { text: string }) {
  return text.replaceAll('*', '')
}
