import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { style } from './style';

/* ----------- */
/*    Props    */
/* ----------- */
interface Props {
    colStyle?: any;
}

export const Col: React.FC<PropsWithChildren<Props>> = ({ children, colStyle }) => {
    /* ------------ */
    /*    Return    */
    /* ------------ */
    return <View style={[style.root, colStyle]}>{children}</View>;
};
