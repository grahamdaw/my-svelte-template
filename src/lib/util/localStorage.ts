import { browser } from '$app/environment';

export const getFromLocalStorage = (key: string): string | undefined => {
    // If we're not in the browser - no localstorage
    if (!browser) {
        return undefined;
    }
    return localStorage?.[key];
}

export const putToLocalStorage = (key: string, value: string): void => {
    // If we're not in the browser - no localstorage
    if (!browser) {
        return undefined;
    }
    return localStorage?.setItem(key, value);
}