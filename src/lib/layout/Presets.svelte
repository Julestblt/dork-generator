<script lang="ts">
	export let presets: string[], preset: string;
</script>

<div class="presets">
	<h2>Presets:</h2>
	<select bind:value={preset}>
		{#each presets as presetOption}
			<option>{presetOption}</option>
		{/each}
	</select>
</div>
