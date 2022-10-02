import instanceOf from '../src/instanceOf'

function Person() {}

Person.prototype = Object.create(Number.prototype)

describe('instanceOf', () => {

  it('base', () => {
    [
      [{}, Object],
      [() => {}, Function],
      [() => {}, Object],
      [new Person(), Person],
      [new Person(), Number],
      [new Person(), Object]
    ].forEach(([o, constructor]) => {
      expect(o instanceof constructor).toBe(true)
      expect(instanceOf(o, constructor)).toBe(true)
    })
  })

})