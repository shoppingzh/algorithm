import fibonacci from '../src/fibonacci'

describe('fibonacci', () => {
  it('base', () => {

    expect(fibonacci(6)).toBe(8)

  })
})