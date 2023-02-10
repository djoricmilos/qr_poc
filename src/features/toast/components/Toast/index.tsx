import { COLORS, DIMENSIONS } from '@common/styles';
import { Button } from '@components/Button';
import { SVGComponent } from '@components/Svg';
import { Typography, TypographyType } from '@components/typography';
import { useNavigation } from '@react-navigation/native';
import { useToast } from '@toast/hooks';
import { ToastType } from '@toast/models';
import React, { useEffect, useMemo } from 'react';
import Animated, {
    useAnimatedStyle,
    useDerivedValue,
    withTiming,
} from 'react-native-reanimated';
import { style } from './style';

interface Props {
    duration?: number;
}

export const Toast: React.FC<Props> = ({ duration = 5000 }) => {
    /* ------------ */
    /* Common Hooks */
    /* ------------ */
    const navigation = useNavigation();

    /* ------------ */
    /*      DI      */
    /* ------------ */
    const { toastState, resetToast } = useToast();

    const {
        type,
        message,
        positiveLabel,
        positiveCallback,
        negativeLabel,
        negativeCallback,
        isAutoDismissible,
    } = toastState;

    const isShown = useDerivedValue(() => (message ? 1 : 0), [message]);

    /* ------------- */
    /*   LifeCycle   */
    /* ------------- */
    useEffect(() => {
        if (!isAutoDismissible) return;

        const resetToastTimeout = setTimeout(() => {
            if (toastState.message) resetToast();
        }, duration);

        return () => clearTimeout(resetToastTimeout);
    }, [toastState.message]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            top: isShown.value
                ? withTiming(DIMENSIONS.screenHeight / 2 - 100)
                : withTiming(-DIMENSIONS.screenHeight / 2),
        };
    });

    /* ------------- */
    /*    Methods    */
    /* ------------- */
    const onNegativePress = (): void => {
        resetToast();

        if (negativeCallback) {
            return negativeCallback();
        }

        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    const onPositivePress = (): void => {
        resetToast();

        if (positiveCallback) {
            return positiveCallback();
        }
    };

    /* ------------ */
    /*    Fields    */
    /* ------------ */
    const toastIconData: any = useMemo(() => {
        if (type === ToastType.ERROR)
            return {
                name: 'FAIL',
                color: COLORS.error,
            };

        return {
            name: 'SUCCESS',
            color: COLORS.success,
        };
    }, [type]);

    /* ------------ */
    /*    Return    */
    /* ------------ */
    return (
        <Animated.View style={[style.wrapper, animatedStyle]}>
            <SVGComponent
                name={toastIconData.name}
                size={95}
                fill={toastIconData.color}
                style={style.toastIcon}
            />
            <Typography center type={TypographyType.heading3}>
                {message}
            </Typography>
            {positiveLabel && (
                <Button
                    label={positiveLabel}
                    onPress={onPositivePress}
                    style={style.positiveButton}
                />
            )}
        </Animated.View>
    );
};
