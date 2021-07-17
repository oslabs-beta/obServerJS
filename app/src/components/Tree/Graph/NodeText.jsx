/* eslint-disable no-nested-ternary */
import React from 'react';

const NodeText = ({ node }) => (
  <text
    dy=".33em"
    fontSize={9}
    fontFamily="Arial"
    textAnchor="middle"
    style={{ pointerEvents: 'none' }}
    fill={node.depth === 0 ? '#71248e' : node.children ? 'white' : '#26deb0'}
  >
    {node.data.name}
  </text>
);

export default NodeText;
