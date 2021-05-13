import React from 'react';
import { Group } from '@visx/group';
import { hierarchy, Tree } from '@visx/hierarchy';
import { LinearGradient } from '@visx/gradient';
import { pointRadial } from 'd3-shape';

const styles = {
  tree: {
    gridArea: 'windows',
    background: 'blue',
    border: '1px solid red',
    margin: 0,
    padding: 0,
  }
}

const TreeStruct = () => {
  return (
    <div style={styles.tree}>
      
    </div>
  )
}

export default TreeStruct


const data = {
  name: 'App',
  children: [
    {
      name: 'getMiddleware',
      type: 'route',
      children: [
        { name: 'processCookies', type: 'function' },
        { name: 'authUser', type: 'function' },
        { name: 'sendREsponse', type: 'function' },
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
                  name: 'D1',
                  type: 'function'
                },
                {
                  name: 'D2',
                  type: 'function'
                },
                {
                  name: 'D3',
                  type: 'function'
                },
              ],
            },
          ],
        },
      ],
    },
    { name: 'Z', type: 'function' },
    {
      name: 'B',
      type: 'route',
      children: [{ name: 'B1', type: 'function' }, { name: 'B2', type: 'function' }, { name: 'B3', type: 'function' }],
    },
  ],
};