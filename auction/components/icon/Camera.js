import React from 'react';
import {Svg, Path, Polyline, Circle} from 'react-native-svg';

function Camera(props) {
  const { width, height} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512">
      <Path
        d="M350.54,148.68l-26.62-42.06C318.31,100.08,310.62,96,302,96H210c-8.62,0-16.31,4.08-21.92,10.62l-26.62,42.06C155.85,155.23,148.62,160,140,160H80a32,32,0,0,0-32,32V384a32,32,0,0,0,32,32H432a32,32,0,0,0,32-32V192a32,32,0,0,0-32-32H373C364.35,160,356.15,155.23,350.54,148.68Z"
        fill={'none'}
        stroke={'#fff'}
        strokeLineCap={'round'}
        strokeLineJoin={'round'}
        strokeWidth={24}
      />
      <Circle
        cx="256"
        cy="272"
        r="80"
        fill={'none'}
        stroke={'#fff'}
        strokeMitterLimit={24}
        strokeWidth={24}
        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      />
      <Polyline
        fill={'none'}
        stroke={'#fff'}
        strokeLineCap={'round'}
        strokeLineJoin={'round'}
        strokeWidth={24}
        points="124 158 124 136 100 136 100 158"
      />
    </Svg>
  );
}

export default Camera;
