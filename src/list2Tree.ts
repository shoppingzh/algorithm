import { merge } from 'lodash'

interface Props {
  id: string,
  pid: string
}

interface Node {
  children?: Node[],
  [key: string]: any
}

const DEFAULT_PROPS = {
  id: 'id',
  pid: 'pid'
} as Props


export default function(list: Node[], userProps?: Props): Node[] {
  const nodes: Node[] = []
  if (!list || !list.length) return nodes
  const props = merge({}, DEFAULT_PROPS, userProps)
  const map = {}
  list.forEach(o => {
    map[o[props.id]] = o
  })
  list.forEach(o => {
    const pid = o[props.pid]
    const parent = map[pid]
    if (parent) {
      let children = parent.children
      if (!children) {
        children = []
        parent.children = children
      }
      children.push(o)
    } else {
      !pid && nodes.push(o)
    }
  })

  return nodes
}

