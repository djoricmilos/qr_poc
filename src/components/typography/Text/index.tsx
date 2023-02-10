import React, { PropsWithChildren } from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { textStyle } from './style';

export enum TypographyType {
    label = 'label',
    error = 'error',
    normal = 'normal',
    button = 'button',
    heading3 = 'heading3',
}

/* ----------- */
/*    Props    */
/* ----------- */
interface Props extends TextProps {
    type?: TypographyType;
    uppercase?: boolean;
    center?: boolean;
}

export const Typography: React.FC<PropsWithChildren<Props>> = ({
    type = TypographyType.normal,
    uppercase = false,
    center = false,
    children,
    ...props
}) => {
    const { style } = props;

    /* ------------ */
    /*    Return    */
    /* ------------ */
    if (!children) return null;

    return (
        <RNText
            {...props}
            allowFontScaling={false}
            style={[
                textStyle[type],
                uppercase && { textTransform: 'uppercase' },
                center && { textAlign: 'center' },
                style,
            ]}
        >
            {children}
        </RNText>
    );
};
