import { COLORS, SPACING } from '@common/styles';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.mainBg,
        paddingVertical: SPACING.l,
    },
    innerContent: {
        flex: 1,
    },
    centered: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
