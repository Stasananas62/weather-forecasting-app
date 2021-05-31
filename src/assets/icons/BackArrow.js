import * as React from 'react';
import Svg, { Path } from 'react-native-svg';


const BackArrow = ({ color = '#B4B4B4', ...props }) => {
    return (
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
                <Path
                    d="M8 7l-5 5 5 5M4 12h17"
                    stroke={color}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
    );
};

export default BackArrow;
