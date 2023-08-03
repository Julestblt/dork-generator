<script>
	import { Header, QueryBuilder, Presets, QueryResult } from '$lib/layout/';
	import { MaterialUiConfig } from '$lib/config';
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

<MaterialUiConfig />
<Header />
<QueryBuilder {inTitle} {inUrl} {domain} {fileType} {textQuery} />
<Presets {presets} {preset} />
<QueryResult {result} />
