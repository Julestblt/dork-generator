<script lang="ts">
	export let inTitle: string, inUrl: string, domain: string, fileType: string, textQuery: string;
</script>

<div class="query-builder">
	<h2>Build the Query</h2>
	<div>
		<label for="inTitle">In Title:</label>
		<input type="text" id="inTitle" bind:value={inTitle} />
	</div>
	<div>
		<label for="inUrl">In Url:</label>
		<input type="text" id="inUrl" bind:value={inUrl} />
	</div>
	<div>
		<label for="domain">Domain:</label>
		<input type="text" id="domain" bind:value={domain} />
	</div>
	<div>
		<label for="fileType">File Type:</label>
		<input type="text" id="fileType" bind:value={fileType} />
	</div>
	<div>
		<label for="textQuery">Text Query:</label>
		<input type="text" id="textQuery" bind:value={textQuery} />
	</div>
</div>

<style>
	.query-builder {
		margin: 1rem;
	}
</style>
