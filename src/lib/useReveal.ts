import { useEffect, useRef } from 'react'
import { observeReveal } from './motion'

/** Ref that gets `data-revealed` the first time its element scrolls into view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const element = ref.current
    return element ? observeReveal(element) : undefined
  }, [])
  return ref
}
