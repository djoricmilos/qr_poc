import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
    size?: number;
}

export const FlashOnIcon: React.FC<IconProps> = ({ size = 24, fill, ...rest }) => (
    <Svg viewBox="0 0 15.111 20.144" width={size} height={size} {...rest}>
        <Path
            d="M12.488 1.755A1.259 1.259 0 0 0 10.502.309L.43 9.124a1.259 1.259 0 0 0 .83 2.207h4.387l-3.026 7.058a1.259 1.259 0 0 0 1.987 1.444L14.68 11.02a1.256 1.256 0 0 0-.83-2.2H9.463Z"
            {...{ fill }}
        />
    </Svg>
);
