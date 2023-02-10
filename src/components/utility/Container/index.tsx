import React, { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollViewProps, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { style } from './style';

/* ----------- */
/*    Props    */
/* ----------- */
interface Props extends ScrollViewProps {
    centered?: boolean;
    isKeyboardAware?: boolean;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({
    children,
    centered = false,
    isKeyboardAware = false,
}) => {
    /* ------------ */
    /*    Return    */
    /* ------------ */
    if (isKeyboardAware)
        return (
            <KeyboardAwareScrollView style={style.root}>
                <SafeAreaView style={[style.innerContent, centered && style.centered]}>
                    {children}
                </SafeAreaView>
            </KeyboardAwareScrollView>
        );

    return (
        <View style={style.root}>
            <SafeAreaView style={[style.innerContent, centered && style.centered]}>
                {children}
            </SafeAreaView>
        </View>
    );
};
