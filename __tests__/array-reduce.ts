import reduce from '../src/array-reduce'

describe('reduce', () => {

  it('base', () => {

    const arr = [1, 2, 3, 4, 5]

    expect(reduce(arr, (sum, o) => sum + o, 0))
      .toEqual(arr.reduce((sum, o) => sum + o, 0))

  })

  it('map', () => {

    const arr = [1, 2, 3, 4, 5]
    
    expect(reduce(arr, (newArr, o) => {
      newArr.push(o * o)
      return newArr
    }, [] as number[])).toEqual([1, 4, 9, 16, 25])

  })

})
