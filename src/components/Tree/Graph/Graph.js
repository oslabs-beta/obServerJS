import { Group } from '@visx/group'
import React from 'react'
import { hierarchy, Tree } from '@visx/hierarchy';
import {
  LinkHorizontal,
} from '@visx/shape';
import useForceUpdate from "./useForceUpdate";

const styles = {
    rect: {
    cursor: 'pointer',
    '&:hover': {
      cursor: 'pointer',
      fill: 'blue'
    },
  }
}

const Graph = ({ margin, sizeWidth, sizeHeight, origin, zoom }) => {
  const forceUpdate = useForceUpdate()

  return (
    <Group top={margin.top} left={margin.left} transform={zoom.toString()}>
      <Tree
          root={hierarchy(data, d => (d.isExpanded ? null : d.children))}
          size={[sizeWidth, sizeHeight]}
          separation={(a, b) => (a.parent === b.parent ? 1 : 0.01) / a.depth}
        >
         
          {tree => (
              <Group top={origin.y} left={origin.x}>
                {tree.links().map((link, i) => (
                  <LinkHorizontal
                    key={i}
                    data={link}
                    stroke="rgb(254,110,158,0.6)"
                    strokeWidth="1"
                    fill="none"
                  />
                ))}
                {tree.descendants().map((node, key) => {
                  const width = 40;
                  const height = 20;

                  let top = node.x
                  let left = node.y

                  return (
                    <Group top={top} left={left} key={key}>
                      {node.depth === 0 && (
                        <circle
                          r={12}
                          fill="url('#links-gradient')"
                          onClick={() => {
                            console.log('click')
                            node.data.isExpanded = !node.data.isExpanded;
                            forceUpdate()
                          }}
                        />
                      )}
                      {node.depth !== 0 && (
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
                            console.log('click')
                            node.data.isExpanded = !node.data.isExpanded;
                            forceUpdate()
                          }}
                        />
                      )}
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
                    </Group>
                  );
                })}
              </Group>
            )}
        </Tree>
    </Group>
  )
}

export default Graph

const data = {
  name: 'App',
  children: [
    {
      name: 'getMiddleware',
      type: 'route',
      children: [
        { name: 'processCookies', type: 'function' },
        { name: 'authUser', type: 'function' },
        { name: 'sendResponse', type: 'function' },
        {
          name: 'getUsers',
          type: 'route',
          children: [
            {
              name: 'queryDB',
              type: 'function'
            },
            {
              name: 'editUser',
              type: 'route',
              children: [
                {
                  name: 'getEmail',
                  type: 'function'
                },
                {
                  name: 'getName',
                  type: 'function'
                },
                {
                  name: 'formatBirthday',
                  type: 'function'
                },
              ],
            },
          ],
        },
      ],
    },
    { name: 'Cors', type: 'function' },
    {
      name: 'registerUser',
      type: 'route',
      children: [{ name: 'santitizeData', type: 'function' }, { name: 'addToDB', type: 'function' }, { name: 'redirectUser', type: 'function' }],
    },
  ],
};