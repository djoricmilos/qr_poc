import { CodeScannerScreen } from '@screens/ScanQR';
import { Toast } from '@toast/components';
import React from 'react';

export const Application: React.FC = () => {
    return (
        <>
            <CodeScannerScreen />
            <Toast />
        </>
    );
};
