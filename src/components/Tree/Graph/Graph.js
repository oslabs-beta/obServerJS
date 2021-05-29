import { Group } from '@visx/group'
import React, {  useContext } from 'react'
import { hierarchy, Tree } from '@visx/hierarchy';
import {
  LinkHorizontal,
} from '@visx/shape';
import { MainContainerContext } from '../../../Global/context/MainContainerContext';
import useForceUpdate from "./useForceUpdate";
import AppNode from './AppNode';
import MiddlewareNode from './MiddlewareNode';
import RouteNode from './RouteNode';
import NodeText from './NodeText';

const Graph = ({ margin, sizeWidth, sizeHeight, origin, zoom }) => {
  const { state: { currentTabIdx, allTabs } } = useContext(MainContainerContext)
  const forceUpdate = useForceUpdate()
  const currentTab = allTabs[currentTabIdx]
  const data = currentTab?.tree

  return !allTabs[currentTabIdx]?.tree 
         ?  null
         : (
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