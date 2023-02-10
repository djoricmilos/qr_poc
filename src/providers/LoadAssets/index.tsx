import { COLORS } from '@common/styles';
import { LocalStorage } from '@libs/localStorage';
import { InitialState, NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@utils/navigation';
import { Asset } from 'expo-asset';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest?.sdkVersion}`;

export type FontSource = Parameters<typeof Font.loadAsync>[0];
const usePromiseAll = (
    promises: Promise<void | void[] | Asset[]>[],
    cb: () => void
) =>
    useEffect(() => {
        (async () => {
            await Promise.all(promises);
            cb();
        })();
    });

const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
    const [ready, setReady] = useState(false);
    usePromiseAll(
        [
            Font.loadAsync(fonts),
            ...assets.map((asset) => Asset.loadAsync(asset)),
        ],
        () => setReady(true)
    );
    return ready;
};

interface LoadAssetsProps {
    fonts?: FontSource;
    assets?: number[];
    children: ReactElement | ReactElement[];
}

const customFonts = {
    'Inter-Regular': require('@assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('@assets/fonts/Inter-Medium.ttf'),
};

SplashScreen.preventAutoHideAsync();

export const LoadAssets = ({ assets, fonts, children }: LoadAssetsProps) => {
    const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
    const [initialState, setInitialState] = useState<
        InitialState | undefined
    >();
    const ready = useLoadAssets(assets ?? [], fonts ?? customFonts);
    const theme = useColorScheme();

    const [fontsLoaded] = useFonts(customFonts);

    useEffect(() => {
        const restoreState = async () => {
            try {
                const LSState = await LocalStorage.get(NAVIGATION_STATE_KEY);
                setInitialState(LSState);
            } finally {
                setIsNavigationReady(true);
            }
        };

        if (!isNavigationReady) {
            restoreState();
        }
    }, [isNavigationReady]);

    const onStateChange = useCallback(
        (state: any) => LocalStorage.set(NAVIGATION_STATE_KEY, state),
        []
    );

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded || !isNavigationReady) return null;

    return (
        <NavigationContainer
            ref={navigationRef}
            {...{ onStateChange, initialState }}
        >
            <StatusBar style={'dark'} backgroundColor={COLORS.mainBg} />
            <SafeAreaProvider>
                <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
                    {children}
                </View>
            </SafeAreaProvider>
        </NavigationContainer>
    );
};
