import { readable } from 'svelte/store'

export default function (options = {}) {
  const now = new Date()

  const currentTime = now.getHours() + ':' + ('0' + now.getMinutes()).slice(-2)

  // return a readable store
  return readable(currentTime, (set) => {
    // the `update` function sets the latest date
    const update = () =>
      set(new Date().getHours() + ':' + ('0'+ new Date().getMinutes()).slice(-2))

    // setup an interval timer to update the store's value every x milliseconds
    const interval = setInterval(update, options.interval || 1000)

    // return a cleanup function,
    // it will stop the timer when the store is destroyed
    return () => clearInterval(interval)
  })
}
