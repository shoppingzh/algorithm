import New from '../src/new'

describe('new', () => {

  it('base', () => {
    function Person(name?: string) {
      this.name = name
    }

    const p = new Person('zxp')
    expect(p.name).toBe('zxp')

    const p2 = New(Person, 'zxp')
    expect(p2.name).toBe('zxp')

  })

  it('return', () => {

    function Person(name?: string) {
      this.name = name
      return {
        name: 'Jack'
      }
    }

    // const p = new Person('zxp')
    // expect(p.name).toBe('Jack')
    
    const p2 = New(Person, 'zxp')
    expect(p2.name).toBe('Jack')

  })

})