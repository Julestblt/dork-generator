<script lang="ts">
	import { QueryBuilder, Presets, QueryResult } from '$lib/layout';
	import { GITHUB_PRESETS } from '$lib/constants';
	import { buildResult } from '$lib/utils';

	let preset: string = '';
	let result: string = '';

	let githubFields: Record<string, string> = {
		'Owner :': '',
		'Org :': '',
		'Language :': '',
		'Path :': '',
		'Content :': ''
	};

	$: if (githubFields) {
		result = buildResult(githubFields, preset);
	}

	$: if (preset) {
		Object.keys(githubFields).forEach((key) => (githubFields[key] = ''));
	}
</script>

<h2>Github</h2>
<section class="main">
	<div>
		<QueryBuilder bind:queryFields={githubFields} />
		<Presets presets={GITHUB_PRESETS} bind:preset />
	</div>
	<QueryResult type={'github'} {result} />
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
