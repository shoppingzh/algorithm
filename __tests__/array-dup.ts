import * as funcs from '../src/array-dup'

describe('array-dup', () => {
  
  it('base', () => {

    Object.values(funcs).forEach(func => {
      
      expect(func([1, 2, 2, 3, 2, 4, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])

    })

  })

})
