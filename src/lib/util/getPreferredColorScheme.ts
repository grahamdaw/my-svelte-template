import { browser } from '$app/environment';

/**
 * Quick check to check the preferred color scheme for the user.
 */
export default () => browser && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light";