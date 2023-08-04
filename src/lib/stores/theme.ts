import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const theme = writable<'dark' | 'light'>(
	(browser && localStorage.theme) ||
		(browser && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
);

theme.subscribe((value) => {
	if (browser && value !== undefined) {
		localStorage.setItem('theme', value);
	}
});
