import { ToastData, ToastType } from '@toast/models';
import { resetToastState, selectToastState, setToastState } from '@toast/state';
import { useDispatch, useSelector } from 'react-redux';

export const useToast = () => {
    /* ------------ */
    /* Common Hooks */
    /* ------------ */
    const dispatch = useDispatch();

    /* ------------ */
    /*   Selectors  */
    /* ------------ */
    const state = useSelector(selectToastState);

    /* ------------ */
    /*    Methods   */
    /* ------------ */
    const setToast = (newState: ToastData): void => {
        dispatch(setToastState(newState));
    };

    const setError = (msg: string): void => {
        dispatch(
            setToastState({
                message: msg,
                type: ToastType.ERROR,
                isAutoDismissible: true,
            })
        );
    };

    const setSuccess = (msg: string): void => {
        dispatch(
            setToastState({
                message: msg,
                type: ToastType.SUCCESS,
                isAutoDismissible: true,
            })
        );
    };

    const resetToast = (): void => {
        dispatch(resetToastState());
    };

    return {
        isToastOpen: !!state.message,
        toastState: state,
        setError,
        setToast,
        resetToast,
        setSuccess,
    };
};
