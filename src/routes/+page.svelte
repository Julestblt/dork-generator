<script lang="ts">
	import { Header, QueryBuilder, Presets, QueryResult } from '$lib/layout/';
	import { MaterialUiConfig } from '$lib/config';
	import { buildResult } from '$lib/utils';
	import { PRESETS } from '$lib/constants';

	let inTitle: string = '';
	let inUrl: string = '';
	let domain: string = '';
	let fileType: string = '';
	let textQuery: string = '';
	let preset: string = '';

	$: result = buildResult(inTitle, inUrl, domain, fileType, textQuery, preset);
</script>

<MaterialUiConfig />
<Header />
<section class="main">
	<div>
		<QueryBuilder bind:inTitle bind:inUrl bind:domain bind:fileType bind:textQuery />
		<Presets presets={PRESETS} bind:preset />
	</div>
	<QueryResult {result} />
</section>

<style>
	section {
		display: flex;
	}

	div {
		flex-grow: 1;
		max-width: 48%;
		margin-right: 4%;
	}
</style>
