import { Typography, TypographyType } from '@components/typography';
import React, { PropsWithChildren } from 'react';
import {
    StyleProp,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import { buttonTypeStyle, style as buttonStyle } from './style';

export enum ButtonType {
    primary = 'primary',
}

interface Props {
    type?: ButtonType;
    label: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    onPress: () => void;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
    type = ButtonType.primary,
    label,
    children,
    style,
    textStyle,
    disabled = false,
    onPress,
}) => {
    return (
        <TouchableOpacity
            {...{ onPress, disabled }}
            style={[
                buttonStyle.wrapper,
                buttonTypeStyle[type],
                disabled && buttonStyle.disabled,
                style,
            ]}
        >
            <Typography
                type={TypographyType.button}
                style={[buttonStyle.text, textStyle]}
            >
                {label}
            </Typography>
            {children}
        </TouchableOpacity>
    );
};
