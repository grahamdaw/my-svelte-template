import { writable } from 'svelte/store';

export function initialiseStore() {
    // TODO Fetch store state from local storage.
}

/**
 * User ID
 */
type UserID = string | undefined;
export const userID = writable<UserID>(undefined);
