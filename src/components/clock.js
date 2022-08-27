import { readable } from 'svelte/store'

export default function (options = {}) {
  const now = new Date()

  const currentTime = now.getHours() + ':' + now.getMinutes()

  // return a readable store
  return readable(currentTime, (set) => {
    // the `update` function sets the latest date
    const update = () => set(new Date().getHours() + ':' + new Date().getMinutes())

    // setup an interval timer to update the store's value every x milliseconds
    const interval = setInterval(update, options.interval || 1000)

    // return a cleanup function,
    // it will stop the timer when the store is destroyed
    return () => clearInterval(interval)
  })
}
