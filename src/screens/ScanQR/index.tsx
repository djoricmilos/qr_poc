import { DIMENSIONS, SPACING } from '@common/styles';
import { Typography } from '@components/typography';
import { IconButton } from '@components/utility/IconButton';
import { useFiscalBill } from '@eFiscal/hooks';
import { useNavigation } from '@react-navigation/native';
import { useIsCameraAllowed } from '@utils/checks';
import { BarCodeScanningResult, Camera, FlashMode } from 'expo-camera';
import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { style } from './style';

/* ----------- */
/*    Props    */
/* ----------- */
interface Props {}

export const CodeScannerScreen: React.FC<Props> = ({}) => {
    /* ------------ */
    /* Common Hooks */
    /* ------------ */
    const navigation = useNavigation<any>();
    const { bottom } = useSafeAreaInsets();

    /* ------------ */
    /*      DI      */
    /* ------------ */
    const { hasPermission } = useIsCameraAllowed();
    const { isScanned, scanQRCode } = useFiscalBill();

    /* ----------- */
    /*    State    */
    /* ----------- */
    const [isFlashOn, setIsFlashOn] = useState(false);

    /* ------------- */
    /*    Methods    */
    /* ------------- */
    const handleToggleFlash = (): void => {
        setIsFlashOn((isOn) => !isOn);
    };

    const handleGoBack = (): void => {
        // DISABLED BACK
        console.log('GO BACK');
    };

    const handleBarCodeScanned = async ({
        data,
    }: BarCodeScanningResult): Promise<void> => {
        if (isScanned) return;

        const vURL = data.split('?vl=')[1];

        await scanQRCode(vURL);
    };

    /* ------------ */
    /*    Return    */
    /* ------------ */
    if (!hasPermission) return <View style={style.wrapper} />;

    return (
        <View style={style.wrapper}>
            <Camera
                ratio="16:9"
                style={{
                    ...StyleSheet.absoluteFillObject,
                    minHeight: DIMENSIONS.screenHeight,
                    width: DIMENSIONS.screenWidth,
                }}
                onBarCodeScanned={handleBarCodeScanned}
                flashMode={isFlashOn ? FlashMode.torch : FlashMode.off}
            />
            <View
                style={[
                    style.footer,
                    {
                        paddingBottom:
                            Platform.OS === 'ios' ? bottom : SPACING.s,
                    },
                ]}
            >
                <IconButton icon="CLOSE" onPress={handleGoBack} />
                <Typography>123456789101</Typography>
                <IconButton
                    icon={isFlashOn ? 'FLASH_OFF' : 'FLASH_ON'}
                    onPress={handleToggleFlash}
                />
            </View>
        </View>
    );
};
