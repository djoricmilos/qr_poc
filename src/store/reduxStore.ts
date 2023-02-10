import { configureStore } from '@reduxjs/toolkit';
import { toastSlice, ToastState } from '@toast/state';

export interface AppStoreState {
    toast: ToastState;
}

export const store = configureStore<AppStoreState, any, any>({
    reducer: {
        toast: toastSlice,
    },
    middleware: [],
});
