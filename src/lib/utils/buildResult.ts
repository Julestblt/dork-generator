const buildResult = (fields: Record<string, string>, preset: string) => {
	const googleParts = [
		fields['In Title:'] && `intitle:${fields['In Title:']}`,
		fields['In URL:'] && `inurl:${fields['In URL:']}`,
		fields['Domain:'] && `site:${fields['Domain:']}`,
		fields['File Type:'] && `filetype:${fields['File Type:']}`,
		fields['Text Query:'] && fields['Text Query:'],
		preset && preset
	];

	const githubParts = [
		fields['Owner :'] && `user:${fields['Owner :']}`,
		fields['Org :'] && `org:${fields['Org :']}`,
		fields['Language :'] && `extension:${fields['Language :']}`,
		fields['Path :'] && `path:${fields['Path :']}`,
		fields['Content :'] && `content:${fields['Content :']}`,
		preset && preset
	];

	const parts =
		fields['In Title:'] || fields['In URL:'] || fields['Domain:'] || fields['File Type:']
			? googleParts
			: githubParts;

	return parts.filter(Boolean).join(' ');
};

export { buildResult };
