export function dup1(arr: any[]) {
  return [...new Set(arr)]
}

export function dup2(arr: any[]) {
  const newArr = []
  arr.forEach(item => {
    if (newArr.indexOf(item) < 0) {
      newArr.push(item)
    }
  })
  return newArr
}
