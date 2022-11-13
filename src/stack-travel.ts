// 栈结构模拟递归

interface TreeNode {
  id: string
  children?: TreeNode[]
}

const root: TreeNode = {
  id: '1',
  children: [{
    id: '1-1',
  }, {
    id: '1-2',
    children: [{
      id: '1-2-1',
    }, {
      id: '1-2-2',
      children: [{
        id: '1-2-2-1'
      }, {
        id: '1-2-2-2'
      }]
    }]
  }, {
    id: '1-3'
  }]
}

export default function() {
  const stack = []
  // TODO
}