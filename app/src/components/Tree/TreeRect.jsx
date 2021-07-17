import React from 'react';

const TreeRect = ({ width, height, zoom }) => (
  <rect
    width={width}
    height={height}
    rx={14}
    fill="#272b4d"
    onTouchStart={zoom.dragStart}
    onTouchMove={zoom.dragMove}
    onTouchEnd={zoom.dragEnd}
    onMouseDown={zoom.dragStart}
    onMouseMove={zoom.dragMove}
    onMouseUp={zoom.dragEnd}
    onMouseLeave={() => {
      if (zoom.isDragging) zoom.dragEnd();
    }}
  />
);

export default TreeRect;
