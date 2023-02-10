import { COLORS, FONT_FAMILY, SPACING } from '@common/styles';
import { StyleSheet } from 'react-native';

export const textStyle = StyleSheet.create({
    button: {
        fontSize: 16,
        color: COLORS.mainText,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: FONT_FAMILY.medium,
    },
    label: {
        color: COLORS.gray,
        fontSize: 16,
        fontFamily: FONT_FAMILY.regular,
    },
    normal: {
        color: COLORS.mainText,
        fontSize: 16,
        fontFamily: FONT_FAMILY.regular,
    },
    heading3: {
        color: COLORS.mainText,
        fontSize: 20,
        fontFamily: FONT_FAMILY.medium,
    },
    error: {
        textAlign: 'right',
        marginTop: -SPACING.s,
        fontSize: 12,
        color: COLORS.error,
    },
});
