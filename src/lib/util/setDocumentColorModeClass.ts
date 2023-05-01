import { browser } from '$app/environment';

/**
 * Update the document class based on the desired color mode. 
 * This basically is the integration to Tailwind light/dark mode:
 * https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
 * 
 * TODO: Add better typing for mode, possibly share with store theme typing. However, this is quite a nice & independent util...
 */
export default (mode: 'dark' | 'light'): void => {

    // If we're not in the browser, nothing to do
    if (!browser) {
        return;
    }

    if (mode === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};