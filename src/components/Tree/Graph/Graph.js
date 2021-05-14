import { Group } from '@visx/group'
import React from 'react'
import { hierarchy, Tree } from '@visx/hierarchy';
import {
  LinkHorizontal,
} from '@visx/shape';
import useForceUpdate from "./useForceUpdate";
import AppNode from './AppNode';
import MiddlewareNode from './MiddlewareNode';
import RouteNode from './RouteNode';
import NodeText from './NodeText';

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
  
                  return (
                    <Group top={node.x} left={node.y} key={key}>
                      {node.depth === 0 && (
                        <AppNode forceUpdate={forceUpdate} node={node} />
                      )}
                      {(node.depth !== 0 && node.data.type === 'function') && (
                        <MiddlewareNode 
                          height={height}
                          width={width}
                          node={node}
                          forceUpdate={forceUpdate}
                        />
                      )}
                      {(node.depth !== 0 && node.data.type === 'route') && (
                        <RouteNode 
                          height={height}
                          width={width}
                          node={node}
                          forceUpdate={forceUpdate}
                        />
                      )}
                      
                      <NodeText node={node} />
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