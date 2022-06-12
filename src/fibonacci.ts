export default function (count: number = 1) {
  let currentCount = 0
  const doFibonacci = (prev: number = 0, current = 1) => {
    if (++currentCount >= count - 1) return current
    const newPrev = prev + current
    return doFibonacci(current, newPrev)
  }
  
  return doFibonacci(1)
}
