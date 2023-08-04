import { writable } from 'svelte/store';

export const theme = writable<'dark' | 'light'>(undefined);

theme.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('theme', value);
	}
});
