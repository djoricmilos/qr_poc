import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalStorageKey } from './keys';

const _getParsedValue = (val: string) => {
    try {
        return JSON.parse(val);
    } catch (error) {
        if (!val) return null;

        return val;
    }
};

const _getStringifiedValue = (val: unknown) => {
    return typeof val === 'string' ? val : JSON.stringify(val);
};

const get = async (key: LocalStorageKey) => {
    const val = await AsyncStorage.getItem(key);

    if (!val) return null;

    return _getParsedValue(val);
};

const set = async (key: LocalStorageKey, val: unknown) => {
    await AsyncStorage.setItem(key, _getStringifiedValue(val));
};

const remove = async (key: LocalStorageKey) => {
    const val = AsyncStorage.getItem(key);

    if (!val) return null;

    await AsyncStorage.removeItem(key);
};

const reset = async () => {
    await AsyncStorage.clear();
};

export const LocalStorage = {
    get,
    set,
    remove,
    reset,
};
