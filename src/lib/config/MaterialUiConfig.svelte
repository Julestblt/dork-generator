<script lang="ts">
	import { theme } from '$lib/stores/theme';
</script>

<svelte:head>
	{#if $theme === 'dark'}
		<link rel="stylesheet" href="/smui-dark.css" />
	{:else}
		<link rel="stylesheet" href="/smui.css" />
	{/if}
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Icons&Roboto+Mono:ital@0;1&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
</svelte:head>

<style>
	:global(*) {
		font-family: 'Roboto', sans-serif;
	}
</style>
