import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
    size?: number;
}

export const QRCodeIcon: React.FC<IconProps> = ({ size = 24, fill, ...rest }) => (
    <Svg viewBox="0 0 88.24 88.24" width={size} height={size} {...rest}>
        <Path
            d="M9.454 0A9.457 9.457 0 0 0 0 9.454v18.909a9.457 9.457 0 0 0 9.454 9.454h18.909a9.457 9.457 0 0 0 9.454-9.454V9.454A9.457 9.457 0 0 0 28.363 0Zm15.757 12.606v12.605H12.606V12.606ZM9.454 50.423A9.457 9.457 0 0 0 0 59.877v18.909a9.457 9.457 0 0 0 9.454 9.454h18.909a9.457 9.457 0 0 0 9.454-9.454V59.877a9.457 9.457 0 0 0-9.454-9.454Zm15.757 12.605v12.606H12.606V63.028ZM50.423 9.454v18.909a9.457 9.457 0 0 0 9.454 9.454h18.908a9.457 9.457 0 0 0 9.454-9.454V9.454A9.457 9.457 0 0 0 78.785 0H59.877a9.457 9.457 0 0 0-9.454 9.454Zm12.606 3.151h12.605v12.606H63.028Zm6.3 69.331v6.3h6.3v-6.3Zm18.909 0h-6.3v6.3h6.3Zm-6.3-31.514v6.3H69.331v-6.3H50.423V88.24h12.605V69.331h6.3v6.3H88.24V50.423Z"
            {...{ fill }}
        />
    </Svg>
);
