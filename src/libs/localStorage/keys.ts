export const LOCAL_STORAGE_KEYS = {
    USER: 'USER',
    EMAIL: 'EMAIL',
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
    PUSH_TOKEN: 'PUSH_TOKEN',
};

export type LocalStorageKey = keyof typeof LOCAL_STORAGE_KEYS | string;
