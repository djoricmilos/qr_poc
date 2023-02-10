import { useTranslation } from '@libs/localization';
import { useNavigation } from '@react-navigation/native';
import { useToast } from '@toast/hooks';
import { ToastType } from '@toast/models';
import { Camera } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Linking, NativeModules, Platform } from 'react-native';

const { RNAndroidOpenSettings } = NativeModules;

export const useIsCameraAllowed = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const { setToast } = useToast();

    const [hasPermission, setHasPermission] = useState(false);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const handleRequestPermission = async () => {
        const permission = await requestPermission();

        setHasPermission(permission.granted);
        if (permission.granted) return;

        handleNoPermissions();
    };

    useEffect(() => {
        handleRequestPermission();
    }, []);

    const openAppSettings = async (): Promise<void> => {
        if (Platform.OS === 'ios')
            return await Linking.openURL('App-prefs:root=General');

        RNAndroidOpenSettings.generalSettings();
    };

    const handleNoPermissions = (): void => {
        setToast({
            message: t('No_camera_permissions'),
            isAutoDismissible: false,
            type: ToastType.ERROR,
            options: {
                negativeLabel: t('Back'),
                negativeCallback: navigation.goBack,
                positiveLabel: t('Allow_access'),
                positiveCallback: openAppSettings,
            },
        });
    };

    return {
        hasPermission,
    };
};
