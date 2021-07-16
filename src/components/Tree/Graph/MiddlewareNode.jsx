import React from 'react'

const MiddlewareNode = ({ height, width, node, forceUpdate }) => {
  return (
    <rect
      height={height}
      width={width * 2}
      y={-height / 2}
      x={-width}
      fill="#272b4d"
      stroke={node.data.children ? '#03c0dc' : '#26deb0'}
      strokeWidth={1}
      strokeDasharray={node.data.children ? '0' : '2,2'}
      strokeOpacity={node.data.children ? 1 : 0.6}
      rx={node.data.children ? 0 : 10}
      onClick={() => {
        node.data.isExpanded = !node.data.isExpanded;
        forceUpdate()
      }}
  />
  )
}

export default MiddlewareNode
