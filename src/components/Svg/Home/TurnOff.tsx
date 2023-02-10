import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
    size?: number;
}

export const TurnOffIcon: React.FC<IconProps> = ({ size = 24, fill, ...rest }) => (
    <Svg viewBox="0 0 30.028 31.029" width={size} height={size} {...rest}>
        <Path
            d="M17.016 2a2 2 0 1 0-4 0v14.015a2 2 0 0 0 4 0Zm-9.04 5.543a2.003 2.003 0 1 0-2.565-3.078 15.017 15.017 0 1 0 19.2 0 2.003 2.003 0 0 0-2.565 3.078 11.01 11.01 0 1 1-14.075 0Z"
            {...{ fill }}
        />
    </Svg>
);
