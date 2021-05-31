import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Search({ color = '#B4B4B4', ...props }) {
        return (
            <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
                    <Path
                        d="M16.25 10a6.25 6.25 0 11-12.5 0 6.25 6.25 0 0112.5 0z"
                        stroke={color}
                        strokeWidth={1.5}
                    />
                    <Path
                        d="M15 15l2 2"
                        stroke={color}
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
            </Svg>
        );
}

export default Search;
