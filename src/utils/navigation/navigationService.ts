import { createRef } from 'react';

export const navigationRef = createRef<any>() as any;
export const isMountedRef = createRef<any>();
export const routeNameRef = createRef<any>();

export const navigate = (name: string, params?: any) => {
    if (isMountedRef && navigationRef) {
        return navigationRef.current.navigate(name, params);
    } else {
        console.error('!!!!not mounted yet!!!!!!!');
    }
};

export const reset = (name: string, params?: any) => {
    if (isMountedRef.current && navigationRef.current) {
        return navigationRef.current.reset({
            index: 0,
            routes: [
                {
                    name,
                    params,
                },
            ],
        });
    } else {
        console.error('!!!!not mounted yet!!!!!!!');
    }
};
