import React from 'react';
import { Zoom } from '@visx/zoom'
import { LinearGradient } from '@visx/gradient';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Graph from './Graph/Graph';
import TreeRect from './TreeRect';

const styles = {
  parent: {
    gridArea: 'windows',
    border: '1px solid yellow',
    margin: 0,
    padding: 0,
  }, 
}


const Tree = () => (
  <ParentSize style={styles.parent}>
    {({ width, height }) => {
      const initialTransform = {
        scaleX: 1,
        scaleY: 1,
        translateX: -211.62,
        translateY: 162.59,
        skewX: 0,
        skewY: 0,
      };

      return (
        <Zoom
        height={height}
        width={width}
        scaleXMin={1 / 2}
        scaleXMax={4}
        scaleYMin={1 / 2}
        scaleYMax={4}
        transformMatrix={initialTransform}
      >
        {zoom => (
          <TreeStructure totalWidth={width} totalHeight={height} zoom={zoom} />
        )}
        
      </Zoom>
      )

    }}
  </ParentSize>
)

const TreeStructure = ({ totalWidth, totalHeight, zoom }) => {
  let margin = { top: 30, left: 30, right: 30, bottom: 70 }

  let innerWidth = totalWidth - margin.left - margin.right
  let innerHeight = totalHeight - margin.top - margin.bottom

  const origin = {
    x: 0, 
    y: 0
  }

  const sizeWidth = innerHeight
  const sizeHeight = innerWidth


  return (
    <div style={{ cursor: zoom.isDragging ? 'grabbing' : 'grab' }}>
      <svg width={totalWidth} height={totalHeight}>
      <LinearGradient id="links-gradient" from="#fd9b93" to="#fe6e9e" />
      <TreeRect width={totalWidth} height={totalHeight} zoom={zoom} />
      <Graph 
        origin={origin}
        margin={margin}
        sizeWidth={sizeWidth}
        sizeHeight={sizeHeight}
        zoom={zoom}
      />
      </svg>
    </div>
  )
}

export default Tree