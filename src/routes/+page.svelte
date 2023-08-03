<script>
	import Header from '$lib/layout/Header.svelte';
	import QueryBuilder from '$lib/layout/QueryBuilder.svelte';
	import Presets from '$lib/layout/Presets.svelte';
	import Result from '$lib/layout/QueryResult.svelte';

	let inTitle = '';
	let inUrl = '';
	let domain = '';
	let fileType = '';
	let textQuery = '';
	let preset = '';

	let presets = [
		'Directory listing (Index of)',
		'Spreadsheets: xlsx, xls, ods, csv, tsv',
		'Text documents: docx, doc, odt, rtf, pdf, txt',
		'Slide presentations: pptx, ppt, odp, pdf',
		'File database.yml'
	];

	$: result = `intitle:${inTitle} inurl:${inUrl} site:${domain} filetype:${fileType} ${textQuery} ${preset}`;
</script>

<Header />
<QueryBuilder {inTitle} {inUrl} {domain} {fileType} {textQuery} />
<Presets {presets} {preset} />
<Result {result} />
