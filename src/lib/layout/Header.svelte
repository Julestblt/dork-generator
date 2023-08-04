<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import IconButton from '@smui/icon-button';
</script>

<header>
	<h1>Google Dork Generator</h1>
	<IconButton
		class="material-icons"
		on:click={() => ($theme = $theme === 'dark' ? 'light' : 'dark')}
	>
		{#if $theme === 'dark'}
			brightness_7
		{:else}
			brightness_4
		{/if}
	</IconButton>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h1 {
		font-size: 3rem;
	}
</style>
