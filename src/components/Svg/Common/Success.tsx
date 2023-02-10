import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
    size?: number;
}

export const SuccessIcon: React.FC<IconProps> = ({ size = 24, fill, ...rest }) => (
    <Svg viewBox="0 0 95 95" width={size} height={size} {...rest}>
        <Path
            d="M45.236 63.049a5.207 5.207 0 0 1-7.348 0L26.014 51.174a5.2 5.2 0 0 1 7.348-7.348l8.2 8.2 20.077-20.075a5.2 5.2 0 0 1 7.347 7.349ZM95 47.5A47.5 47.5 0 1 1 47.5 0 47.5 47.5 0 0 1 95 47.5ZM47.5 8.906A38.594 38.594 0 1 0 86.094 47.5 38.588 38.588 0 0 0 47.5 8.906Z"
            {...{ fill }}
        />
    </Svg>
);
