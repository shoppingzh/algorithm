export default function(fn: Function, thisArg: any, ...presetArgs: any[]) {
  const context = thisArg || window
  const fnSymbol = Symbol('fn')
  context[fnSymbol] = fn
  return function(...args: any[]) {
    return context[fnSymbol](...presetArgs, ...args)
  }
}
