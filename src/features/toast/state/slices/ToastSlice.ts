import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStoreState } from '@store/reduxStore';
import { ToastData, ToastType } from '@toast/models';

/* --------- */
/*   STATE   */
/* --------- */
export interface ToastState {
    message: string;
    negativeLabel: string;
    negativeCallback: null | (() => void);
    positiveLabel: string;
    positiveCallback: null | (() => void);
    isAutoDismissible: boolean;
    type: ToastType;
}

const initialState: ToastState = {
    message: '',
    negativeLabel: '',
    negativeCallback: null,
    positiveLabel: '',
    positiveCallback: null,
    isAutoDismissible: true,
    type: ToastType.ERROR,
};

/* --------- */
/*   SLICE   */
/* --------- */
const slice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        setToastState: (state: ToastState, action: PayloadAction<ToastData>) => {
            const { message, type, isAutoDismissible, options } = action.payload;

            state.message = message;
            state.type = type;
            state.isAutoDismissible = isAutoDismissible;

            if (options?.negativeLabel && options?.negativeCallback) {
                state.negativeLabel = options.negativeLabel;
                state.negativeCallback = options.negativeCallback;
            }

            if (options?.positiveLabel && options?.positiveCallback) {
                state.positiveLabel = options.positiveLabel;
                state.positiveCallback = options.positiveCallback;
            }
        },
        resetToastState: (state: ToastState) => {
            state.message = '';
            state.negativeLabel = '';
            state.negativeCallback = null;
            state.positiveLabel = '';
            state.positiveCallback = null;
            state.isAutoDismissible = true;
        },
    },
});

/* ----------- */
/*   ACTIONS   */
/* ----------- */
export const { setToastState, resetToastState } = slice.actions;

/* ------------- */
/*   SELECTORS   */
/* ------------- */
const getToastState = (state: AppStoreState) => state.toast;

export const selectToastState = createSelector(getToastState, (state: ToastState) => state);

export const toastSlice = slice.reducer;
