import { ALIGNMENT, BORDER_RADIUS, COLORS, SPACING } from '@common/styles';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { ButtonType } from '.';

export const style = StyleSheet.create({
    wrapper: {
        minHeight: 40,
        padding: SPACING.s,
        opacity: 0.8,
        borderRadius: BORDER_RADIUS.xs,
        backgroundColor: COLORS.primary,
        ...ALIGNMENT.center,
    },
    disabled: {
        opacity: 0.5,
    },
    text: {},
});

export const buttonTypeStyle: Record<
    ButtonType,
    StyleProp<ViewStyle>
> = StyleSheet.create({
    primary: {
        backgroundColor: COLORS.primary,
    },
});
