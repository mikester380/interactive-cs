import { useEffect, useState } from "react"
import { humanReadableTime } from "../../utils/helpers"

export function useTime(time) {
  const [ createdAt, setCreatedAt ] = useState(humanReadableTime(time))

  useEffect(function() {
    const interval = setInterval(() => setCreatedAt(humanReadableTime(time)), 1000 * 60)

    return () => clearInterval(interval)
  }, [time])

  return [createdAt]
}