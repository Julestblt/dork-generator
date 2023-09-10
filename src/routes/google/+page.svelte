<script lang="ts">
	import { QueryBuilder, Presets, QueryResult } from '$lib/layout/';
	import { buildResult } from '$lib/utils';
	import { GOOGLE_PRESETS } from '$lib/constants';

	let preset: string = '';

	let googleFields: Record<string, string> = {
		'In Title:': '',
		'In URL:': '',
		'Domain:': '',
		'File Type:': '',
		'Text Query:': ''
	};

	$: result = buildResult(googleFields, preset);
</script>

<h2>Google</h2>
<section class="main">
	<div>
		<QueryBuilder bind:queryFields={googleFields} />
		<Presets presets={GOOGLE_PRESETS} bind:preset />
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

	h2 {
		font-size: 2rem;
	}
</style>
