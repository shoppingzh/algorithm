export default function(array: any[]) {
  const all = []

  const doFlat = (arr: any[]) => {
    if (!arr || !arr.length) return
    arr.forEach(o => {
      if (Array.isArray(o)) return doFlat(o)
      all.push(o)
    })
  }

  doFlat(array)

  return all
}
