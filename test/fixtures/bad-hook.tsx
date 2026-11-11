// React layer: a hook called conditionally.
import { useState } from 'react'
export function Counter({ on }: { on: boolean }) {
  if (on) {
    const [n] = useState(0)
    return n
  }
  return null
}
