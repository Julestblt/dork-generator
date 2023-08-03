<script lang="ts">
	import { Header, QueryBuilder, Presets, QueryResult } from '$lib/layout/';
	import { MaterialUiConfig } from '$lib/config';
	import { buildResult } from '$lib/utils';
	import type { Preset } from '$lib/types';

	let inTitle: string = '';
	let inUrl: string = '';
	let domain: string = '';
	let fileType: string = '';
	let textQuery: string = '';
	let preset: string = '';

	let presets: Preset[] = [
		{
			label: 'Directory listing (Index of)',
			value: 'intitle:index.of'
		},
		{
			label: 'Spreadsheets: xlsx, xls, ods, csv, tsv',
			value: 'filetype:xlsx OR filetype:xls OR filetype:ods OR filetype:csv OR filetype:tsv'
		},
		{
			label: 'Text documents: docx, doc, odt, rtf, pdf, txt',
			value:
				'filetype:docx OR filetype:doc OR filetype:odt OR filetype:rtf OR filetype:pdf OR filetype:txt'
		},
		{
			label: 'Slide presentations: pptx, ppt, odp, pdf',
			value: 'filetype:pptx OR filetype:ppt OR filetype:odp OR filetype:pdf'
		},
		{
			label: 'File database.yml',
			value: 'filetype:yml database'
		}
	];

	$: result = buildResult(inTitle, inUrl, domain, fileType, textQuery, preset);
</script>

<MaterialUiConfig />
<Header />
<section class="main">
	<div>
		<QueryBuilder bind:inTitle bind:inUrl bind:domain bind:fileType bind:textQuery />
		<Presets {presets} bind:preset />
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
