import React from 'react'

const RouteNode = ({ height, width, y, x, node, forceUpdate }) => {
  return (
    // <rect
    //   height={height}
    //   width={width * 2}
    //   y={-height / 2}
    //   x={-width}
    //   fill="green"
    //   stroke={node.data.children ? '#03c0dc' : '#26deb0'}
    //   strokeWidth={1}
    //   strokeDasharray={node.data.children ? '0' : '2,2'}
    //   strokeOpacity={node.data.children ? 1 : 0.6}
    //   rx={node.data.children ? 0 : 10}
    //   onClick={() => {
    //     node.data.isExpanded = !node.data.isExpanded;
    //     forceUpdate()
    //   }}
    // />

    <circle
      r={32}
      fill="url('#links-gradient')"
      onClick={() => {
        node.data.isExpanded = !node.data.isExpanded;
        forceUpdate()
    }}
    />
  )
}

export default RouteNode
