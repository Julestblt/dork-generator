<script lang="ts">
	import Select, { Option } from '@smui/select';
	import type { Preset } from '$lib/types';

	export let presets: Preset[], preset: string;
</script>

<div class="presets">
	<h2>Presets :</h2>
	<Select variant="outlined" style="width: 100%;" bind:value={preset} label="Presets">
		{#each presets as { label, value }, i (i)}
			<Option {value}>{label}</Option>
		{/each}
	</Select>
</div>

<style>
	.presets {
		margin-top: 3rem;
	}

	h2 {
		margin: 0 0 1rem 0;
	}
</style>
