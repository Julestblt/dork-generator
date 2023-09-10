<script lang="ts">
	import Textfield from '@smui/textfield';
	import IconButton from '@smui/icon-button';

	export let queryFields: Record<string, string> = {};
</script>

<div class="query-builder">
	<h2>Build the Query</h2>

	{#each Object.keys(queryFields) as label (label)}
		<div>
			<Textfield
				variant="outlined"
				style="width: 100%;display: flex;align-items: center;"
				helperLine$style="width: 100%;"
				bind:value={queryFields[label]}
				{label}
			>
				<IconButton
					tabindex={-1}
					on:click={() => (queryFields[label] = '')}
					class="material-icons"
					slot="trailingIcon"
				>
					delete
				</IconButton>
			</Textfield>
		</div>
	{/each}
</div>

<style>
	div {
		width: 100%;
		margin: 0.7rem 0;
	}
</style>
