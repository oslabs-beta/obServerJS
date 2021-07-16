/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-indent */
import React from 'react';

const RouteNode = ({ node, forceUpdate }) => (
  <circle
    r={32}
    fill="url('#links-gradient')"
    onClick={() => {
      node.data.isExpanded = !node.data.isExpanded;
      forceUpdate();
    }}
  />
);

export default RouteNode;
