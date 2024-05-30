import {
  SECS_PER_MINUTE,
  SECS_PER_HOUR,
  SECS_PER_DAY,
  SECS_PER_WEEK,
  SECS_PER_MONTH,
  SECS_PER_YEAR,
} from "./constants"

export function ID(comments) {
  if (!comments.length) return 1

  let [{ id, replies }] = comments.slice(-1)

  if (replies.length) {
    let [{ id }] = replies.slice(-1)
    return ++id
  }

  return ++id
}

export function humanReadableTime(then) {
  const delta = Date.now() - then
  const secondsPassed = Math.floor(delta / 1000)
  const getString = (num, text) => `${num} ${num > 1 ? `${text}s` : text} ago`

  if (secondsPassed / SECS_PER_YEAR >= 1) {
    const value = Math.floor(secondsPassed / SECS_PER_YEAR)
    return getString(value, "year")
  } else if (secondsPassed / SECS_PER_MONTH >= 1) {
    const value = Math.floor(secondsPassed / SECS_PER_MONTH)
    return getString(value, "month")
  } else if (secondsPassed / SECS_PER_WEEK >= 1) {
    const value = Math.floor(secondsPassed / SECS_PER_WEEK)
    return getString(value, "week")
  } else if (secondsPassed / SECS_PER_DAY >= 1) {
    const value = Math.floor(secondsPassed / SECS_PER_DAY)
    return getString(value, "day")
  } else if (secondsPassed / SECS_PER_HOUR >= 1) {
    const value = Math.floor(secondsPassed / SECS_PER_HOUR)
    return getString(value, "hour")
  } else {
    const value = Math.floor(secondsPassed / SECS_PER_MINUTE)
    return getString(value, "min")
  }
}

export function sortComments(comments) {
  //sort comments according to their scores
  return Array.from(comments).sort(function (a, b) {
    if (a.score > b.score) return -1
    if (a.score < b.score) return 1

    //if both scores are equal, maintain the order
    return 0
  })
}

export const storage = {
  get(name) {
    const res = localStorage.getItem(name)
    return res ? JSON.parse(res) : null
  },

  set(name, value) {
    const str = JSON.stringify(value)
    localStorage.setItem(name, str)
  },
}

export function removeUsername(text) {
  return text.split(" ").slice(1).join(" ")
}
