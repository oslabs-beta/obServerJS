import React from 'react'

const AppNode = ({ forceUpdate, node }) => {
  return (
    <circle
      r={12}
      fill="url('#links-gradient')"
      onClick={() => {
        node.data.isExpanded = !node.data.isExpanded;
        forceUpdate()
      }}
  />
  )
}

export default AppNode
