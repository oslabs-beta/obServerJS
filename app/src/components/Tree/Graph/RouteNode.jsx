/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-indent */
import React from 'react';

const RouteNode = ({
  node, forceUpdate, width, height,
}) => (
  <rect
    rx={10}
    width={width}
    height={height}
    y={-height / 2}
    x={-width / 2}
    fill="url('#links-gradient')"
    onClick={() => {
      node.data.isExpanded = !node.data.isExpanded;
      forceUpdate();
    }}
  />
);

export default RouteNode;
