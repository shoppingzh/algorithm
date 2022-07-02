import list2Tree from '../src/list2Tree'

const list = [
  {
    id: 1,
    name: '1'
  },
  {
    id: 2,
    name: '1-1',
    pid: 1
  },
  {
    id: 3,
    name: '2'
  },
  {
    id: 4,
    name: '1-2',
    pid: 1
  },
  {
    id: 5,
    name: '1-2-1',
    pid: 4
  },
  // 游离节点
  {
    id: 6,
    name: '5-1',
    pid: 12
  }
]

describe('list2Tree', () => {

  it('base', () => {

    expect(list2Tree(list)).toEqual([{
      id: 1,
      name: '1',
      children: [{
        id: 2,
        name: '1-1',
        pid: 1
      }, {
        id: 4,
        name: '1-2',
        pid: 1,
        children: [{
          id: 5,
          name: '1-2-1',
          pid: 4
        }]
      }]
    }, {
      id: 3,
      name: '2'
    }])

  })

})
