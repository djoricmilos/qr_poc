import { COLORS } from '@common/styles';
import { SVGComponent, SVG_NAMES } from '@components/Svg';
import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { style } from './style';

/* ----------- */
/*    Props    */
/* ----------- */
interface Props {
    wrapperStyle?: StyleProp<ViewStyle>;
    iconStyle?: StyleProp<any>;
    icon: keyof typeof SVG_NAMES;
    iconSize?: number;
    isDisabled?: boolean;
    iconFill?: string;
    onPress: () => void;
}

export const IconButton: React.FC<Props> = ({
    icon,
    iconStyle,
    iconFill,
    iconSize,
    isDisabled = false,
    wrapperStyle,
    onPress,
}) => {
    /* ------------ */
    /*    Return    */
    /* ------------ */
    return (
        <TouchableOpacity
            {...{ onPress }}
            disabled={isDisabled}
            style={[style.wrapper, wrapperStyle, { opacity: isDisabled ? 0.3 : 1 }]}
        >
            <SVGComponent
                name={icon}
                size={iconSize ?? 24}
                fill={iconFill ?? COLORS.mainText}
                style={iconStyle}
            />
        </TouchableOpacity>
    );
};
