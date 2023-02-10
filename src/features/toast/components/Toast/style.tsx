import { ALIGNMENT, BORDER_RADIUS, BOX_SHADOW, COLORS, DIMENSIONS, SPACING } from '@common/styles';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    wrapper: {
        left: SPACING.m + SPACING.l,
        top: -DIMENSIONS.screenHeight / 2,
        zIndex: 9999,
        width: DIMENSIONS.containerWidth - SPACING.l * 2,
        position: 'absolute',
        backgroundColor: COLORS.inputBg,
        padding: SPACING.l,
        borderRadius: BORDER_RADIUS.paper,
        ...ALIGNMENT.center,
        ...BOX_SHADOW.default,
    },
    toastIcon: {
        marginBottom: SPACING.xl,
    },
    positiveButton: {
        marginTop: SPACING.l,
        width: '100%',
    },
});
