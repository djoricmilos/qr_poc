import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
    size?: number;
}

export const FlashOffIcon: React.FC<IconProps> = ({ size = 24, fill, ...rest }) => (
    <Svg viewBox="0 0 15.111 20.144" width={size} height={size} {...rest}>
        <Path
            data-name="Subtraction 1"
            d="M5.513 20.143a1.258 1.258 0 0 1-1.156-1.755l2.972-6.934 4.771 3.341-5.756 5.037a1.268 1.268 0 0 1-.831.311Zm12-4.046a.929.929 0 0 1-.535-.169l-3.431-2.4-9.118-6.385h.006L.394 4.315a.934.934 0 1 1 1.071-1.53l4.411 3.089L12.237.311A1.27 1.27 0 0 1 13.069 0a1.258 1.258 0 0 1 1.155 1.755l-3.03 7.061h4.387a1.256 1.256 0 0 1 .83 2.2l-1.416 1.238 3.06 2.146a.934.934 0 0 1-.537 1.7ZM7.154 11.331h-4.16a1.26 1.26 0 0 1-.83-2.208l.816-.714 4.17 2.92Z"
            {...{ fill }}
        />
    </Svg>
);
