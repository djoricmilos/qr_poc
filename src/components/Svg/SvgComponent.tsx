import React, { useMemo } from 'react';
import { SvgProps } from 'react-native-svg';
import { SuccessIcon } from './Common';
import { FailIcon } from './Common/Fail';
import { SVG_NAMES } from './constants';
import { CloseIcon, FlashOffIcon, FlashOnIcon, TurnOffIcon } from './Home';
import { QRCodeIcon } from './Home/';

/* ----------- */
/*    Props    */
/* ----------- */
interface Props extends SvgProps {
    name: keyof typeof SVG_NAMES;
    size: number;
}

export const SVGComponent: React.FC<Props> = ({ name, size = 24, ...rest }) => {
    /* ------------ */
    /*    Fields    */
    /* ------------ */
    const renderMap = useMemo(
        () => ({
            [SVG_NAMES.FAIL]: ({ ...props }) => <FailIcon {...props} />,
            [SVG_NAMES.SUCCESS]: ({ ...props }) => <SuccessIcon {...props} />,

            [SVG_NAMES.CLOSE]: ({ ...props }) => <CloseIcon {...props} />,
            [SVG_NAMES.QR_CODE]: ({ ...props }) => <QRCodeIcon {...props} />,
            [SVG_NAMES.FLASH_ON]: ({ ...props }) => <FlashOnIcon {...props} />,
            [SVG_NAMES.FLASH_OFF]: ({ ...props }) => <FlashOffIcon {...props} />,
            [SVG_NAMES.POWER_OFF]: ({ ...props }) => <TurnOffIcon {...props} />,
        }),
        []
    );

    /* ------------ */
    /*    Return    */
    /* ------------ */
    return renderMap[name]({ size, ...rest });
};
