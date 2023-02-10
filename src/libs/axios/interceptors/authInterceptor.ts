import { LocalStorage } from '@libs/localStorage';

export const authInterceptor = async (request: any) => {
    const token: string = await LocalStorage.get('ACCESS_TOKEN');

    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    } else {
        delete request.headers['Authorization'];
    }

    return request;
};
