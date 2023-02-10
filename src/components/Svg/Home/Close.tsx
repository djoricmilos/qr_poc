import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
    size?: number;
}

export const CloseIcon: React.FC<IconProps> = ({ size = 24, fill, ...rest }) => (
    <Svg viewBox="0 0 14.013 14.013" width={size} height={size} {...rest}>
        <Path
            d="M13.598 2.393A1.402 1.402 0 1 0 11.615.41L7.006 5.023 2.393.415A1.402 1.402 0 0 0 .41 2.397l4.613 4.609L.415 11.62a1.402 1.402 0 0 0 1.983 1.983L7.007 8.99l4.613 4.609a1.402 1.402 0 0 0 1.983-1.983L8.99 7.007Z"
            {...{ fill }}
        />
    </Svg>
);
