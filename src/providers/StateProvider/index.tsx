import { store } from '@store/reduxStore';
import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

interface Props {}

export const Provider: React.FC<PropsWithChildren<Props>> = ({ children }) => {
    return <ReduxProvider {...{ store }}>{children}</ReduxProvider>;
};
