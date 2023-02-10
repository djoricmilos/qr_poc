import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
    size?: number;
}

export const FailIcon: React.FC<IconProps> = ({ size = 24, fill, ...rest }) => (
    <Svg viewBox="0 0 95 95" width={size} height={size} {...rest}>
        <Path
            d="M32.471 32.471a4.289 4.289 0 0 1 6.142 0l8.721 8.739 8.888-8.739a4.289 4.289 0 0 1 6.142 0 4.031 4.031 0 0 1 0 6.142l-8.574 8.72 8.572 8.888a4.343 4.343 0 0 1-6.142 6.142l-8.887-8.573-8.721 8.572a4.031 4.031 0 0 1-6.142 0 4.289 4.289 0 0 1 0-6.142l8.739-8.888-8.739-8.721a4.289 4.289 0 0 1 0-6.142ZM95 47.5A47.5 47.5 0 1 1 47.5 0 47.5 47.5 0 0 1 95 47.5ZM47.5 8.906A38.594 38.594 0 1 0 86.094 47.5 38.588 38.588 0 0 0 47.5 8.906Z"
            {...{ fill }}
        />
    </Svg>
);
