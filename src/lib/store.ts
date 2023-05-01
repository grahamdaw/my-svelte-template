
import { writable } from 'svelte/store';
import getPreferredColorScheme from '$lib/util/getPreferredColorScheme';
import { getFromLocalStorage, putToLocalStorage } from '$lib/util/localStorage';

/**
 * Theme
 */
type Theme = "light" | "dark";
const isTheme = (value: string | undefined): value is Theme => value === "light" || value === "dark";

// Initialize value or fetch from localstorage
const storedTheme = getFromLocalStorage('theme');

// Create the store and set the initial value
export const theme = writable<string>(isTheme(storedTheme) ?  storedTheme : getPreferredColorScheme());

// Keep local state synchronized with the store
theme.subscribe((value) => putToLocalStorage('theme', value));
