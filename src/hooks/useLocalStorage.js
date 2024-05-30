import { useState, useEffect } from "react"
import { storage } from "../../utils/helpers"

export function useLocalStorage(name, fallbackValue) {
  const [state, setState] = useState(() => storage.get(name) || fallbackValue)

  useEffect(() => storage.set(name, state), [state, name])

  return [state, setState]
}
