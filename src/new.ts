export default function New(constructor: Function, ...args: any[]) {
  const o = {}
  Object.setPrototypeOf(o, constructor.prototype)
  const result = constructor.call(o, ...args)
  return typeof result === 'object' ? result : o
}
