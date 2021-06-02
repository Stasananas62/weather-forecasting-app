import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

function Cross(props) {
    return (
        <Svg width={40} height={40} viewBox="0 0 16 16" fill="none" {...props}>
            {/*<Rect*/}
            {/*    x={0.75}*/}
            {/*    y={0.75}*/}
            {/*    width={14.5}*/}
            {/*    height={14.5}*/}
            {/*    rx={7.25}*/}
            {/*    stroke="#717585"*/}
            {/*    strokeWidth={1.5}*/}
            {/*/>*/}
            <Path
                d="M10.433 5.6l-4.53 4.53M5.903 5.6l4.53 4.53"
                stroke="#717585"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default Cross;
