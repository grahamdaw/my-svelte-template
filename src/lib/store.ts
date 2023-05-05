
import { writable, type Writable } from 'svelte/store';
import { getFromLocalStorage, putToLocalStorage } from '$lib/util/localStorage';

/**
 * Example global store with persistance to local storage.
 * Skeleton also provides a built in 'localStorageStore' that should behave in the same way.
 */
const exampleKey = "example";
type Example = "hello" | "world";
const isExample = (value: string | undefined): value is Example => value === "hello" || value === "world";

// Initialize value or fetch from localstorage
const storedExample = getFromLocalStorage(exampleKey);

// Create the store and set the initial value
export const example = writable<Example>(isExample(storedExample) ?  storedExample : "hello");

// Keep local storage synchronized with the store
example.subscribe((value) => putToLocalStorage(exampleKey, value));
