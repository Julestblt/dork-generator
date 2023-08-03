<script lang="ts">
	import Textfield from '@smui/textfield';

	export let inTitle: string, inUrl: string, domain: string, fileType: string, textQuery: string;
</script>

<div class="query-builder">
	<h2>Build the Query</h2>
	<div>
		<Textfield bind:value={inTitle} label="In Title:" />
	</div>
	<div>
		<Textfield bind:value={inUrl} label="In URL:" />
	</div>
	<div>
		<Textfield bind:value={domain} label="Domain:" />
	</div>
	<div>
		<Textfield bind:value={fileType} label="File Type:" />
	</div>
	<div>
		<Textfield bind:value={textQuery} label="Text Query:" />
	</div>
</div>
