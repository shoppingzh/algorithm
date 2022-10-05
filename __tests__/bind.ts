import bind from '../src/bind'

describe('bind', () => {

  it('base', () => {
    function hello(b: any, c: any) {
      return [this.a, b, c]
    }

    const func = bind(hello, {
      a: 1
    }, 2)
    expect(func(3)).toEqual([1, 2, 3])
    const bindFunc = hello.bind({ a: 1 }, 2)
    expect(bindFunc(3)).toEqual([1, 2, 3])
  })

})