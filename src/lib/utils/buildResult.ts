const buildResult = (
	inTitle: string,
	inUrl: string,
	domain: string,
	fileType: string,
	textQuery: string,
	preset: string
) => {
	const parts = [
		inTitle && `intitle:${inTitle}`,
		inUrl && `inurl:${inUrl}`,
		domain && `site:${domain}`,
		fileType && `filetype:${fileType}`,
		textQuery && textQuery,
		preset && preset
	];

	return parts.filter(Boolean).join(' ');
};

export { buildResult };
