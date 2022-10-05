type Callback<S, R> = (prevValue: R, currentValue: S, index: number, arr: S[]) => R

export default function reduce<S, R>(arr: S[], callback: Callback<S, R>, initialValue: R): R {
  let prevValue = initialValue
  arr.forEach((item, index) => {
    prevValue = callback(prevValue, item, index, arr)
  })
  return prevValue
}
