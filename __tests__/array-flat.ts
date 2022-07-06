import { flattenDeep } from 'lodash'
import flat from '../src/array-flat'

it('test', () => {

  [
    [1, 2, 3],
    [1, [2, 3]],
    [1, [2, [3, 4, [5, 6]]]],
    [1, { arr: [2, 3, 4] }, 5],
    [1, { 0: 2, 1: 3 }, 4],
  ].forEach(o => {
    console.log(flat(o))
    expect(flat(o)).toEqual(flattenDeep(o as any))
  })


})