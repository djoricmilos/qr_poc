import { useTranslation } from '@libs/localization';
import { useNavigation } from '@react-navigation/native';
import { useToast } from '@toast/hooks';
import { ToastType } from '@toast/models';
import { useState } from 'react';

export const useFiscalBill = () => {
    /* ------------ */
    /* Common Hooks */
    /* ------------ */
    const { t } = useTranslation();
    const navigation = useNavigation<any>();

    /* ----------- */
    /*    State    */
    /* ----------- */
    const [isScanned, setIsScanned] = useState(false);

    /* ------------ */
    /*      DI      */
    /* ------------ */
    const { setError, setToast, resetToast } = useToast();

    /* ------------ */
    /*    Methods   */
    /* ------------ */
    const handleScanAgain = (): void => {
        resetToast();
        setIsScanned(false);
    };

    const scanQRCode = async (verificationUrl: string): Promise<void> => {
        try {
            if (!verificationUrl) return setError(t('Invalid_qr_code'));

            setIsScanned(true);

            // CALL THE SERVER
            setToast({
                message: t('QR_scan_success'),
                isAutoDismissible: false,
                type: ToastType.SUCCESS,
                options: {
                    negativeLabel: t('Leave'),
                    negativeCallback: navigation.goBack,
                    positiveLabel: t('Scan_again'),
                    positiveCallback: handleScanAgain,
                },
            });
        } catch (error: any) {
            setIsScanned(true);
            setToast({
                message: error.message,
                isAutoDismissible: false,
                type: ToastType.ERROR,
                options: {
                    positiveLabel: t('Try_again'),
                    positiveCallback: handleScanAgain,
                },
            });
        }
    };

    /* ------------ */
    /*    Return    */
    /* ------------ */
    return {
        isScanned,
        scanQRCode,
        setIsScanned,
    };
};
