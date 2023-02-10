import { ALIGNMENT, COLORS, SPACING } from '@common/styles';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    wrapper: {
        ...StyleSheet.absoluteFillObject,
    },
    footer: {
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        backgroundColor: COLORS.mainBg,
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.s,
        ...ALIGNMENT.rowCenterBetween,
    },
});
