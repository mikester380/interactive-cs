import { SECS_PER_MINUTE, SECS_PER_HOUR, SECS_PER_DAY, SECS_PER_WEEK, SECS_PER_MONTH, SECS_PER_YEAR } from "./constants"


export function getnextid(comments) {
  if (!comments.length) return 0

  const pc = comments[comments.length - 1]
  const hasReplies = pc.replies.length > 0

  if (hasReplies) {
    const pr = pc.replies[pc.replies.length - 1]
    return pr.id + 1
  }

  return pc.id + 1
}

export function humanReadableTime(then) {
  const delta = Date.now() - then
  const secondsPassed = Math.floor(delta / 1000)
  const getString = (num, text) => `${num} ${num > 1 ? `${text}s` : text} ago`

  if (secondsPassed / SECS_PER_YEAR >= 1) {
    const value = Math.floor(secondsPassed / SECS_PER_YEAR)
    return getString(value, 'year')

  } else if (secondsPassed / SECS_PER_MONTH >= 1) {
    const value = Math.floor(secondsPassed / SECS_PER_MONTH)
    return getString(value, 'month')

  } else if (secondsPassed / SECS_PER_WEEK >= 1) {
    const value = Math.floor(secondsPassed / SECS_PER_WEEK)
    return getString(value, 'week')

  } else if (secondsPassed / SECS_PER_DAY >= 1) {
    const value = Math.floor(secondsPassed / SECS_PER_DAY)
    return getString(value, 'day')

  } else if (secondsPassed / SECS_PER_HOUR >= 1) {
    const value = Math.floor(secondsPassed / SECS_PER_HOUR)
    return getString(value, 'hour')

  } else {
    const value = Math.floor(secondsPassed / SECS_PER_MINUTE)
    return getString(value, 'min')
  }
}

export function sortComments(comments) {
  //sort comments according to their scores
  return [...comments].sort(function (a, b){
    if (a.score > b.score) return -1
    if (a.score < b.score) return 1

    //if both scores are equal, maintain the order
    return 0
  })
}

// export function sortReplies(replies) {
//   // sort the replies according to the time they were created in ascending order
//   return replies.sort(function(a, b){
//     if (a.createdAt < b.createdAt) return 1
//     if (a.createdAt > b.createdAt) return -1

//     return 0
//   })
// }

export function saveLocally(alias, value) {
  localStorage.setItem(
    alias,
    JSON.stringify(value)
  )
}

export function getLocallySaved(alias) {
  const item = localStorage.getItem(alias)

  //if item isn't null, return the parsed item
  if (item) return JSON.parse(item)

  //else return null which is the value returned by local storage for items that don't exist
  return item
}

export function removeUsername(text) {
  return text.split(' ').slice(1).join(' ')
}