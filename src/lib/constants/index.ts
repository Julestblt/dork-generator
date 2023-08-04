import type { Preset } from '$lib/types';

export const PRESETS: Preset[] = [
	{ label: 'None', value: null },
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
