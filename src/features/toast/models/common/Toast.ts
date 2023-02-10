import { ToastType } from './enums';

export interface ToastDataOptions {
    negativeLabel?: string;
    negativeCallback?: () => void;
    positiveLabel?: string;
    positiveCallback?: () => void;
}

export interface ToastData {
    message: string;
    type: ToastType;
    isAutoDismissible: boolean;
    options?: ToastDataOptions;
}
