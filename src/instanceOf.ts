export default function instanceOf(o: any, constructor: Function): boolean {
  let curr = o
  while (curr) {
    const proto = curr.__proto__
    if (proto === constructor.prototype) return true
    curr = proto
  }
  return false
}
