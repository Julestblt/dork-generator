<script lang="ts">
	import Textfield from '@smui/textfield';

	export let inTitle: string, inUrl: string, domain: string, fileType: string, textQuery: string;
</script>

<div class="query-builder">
	<h2>Build the Query</h2>
	<div>
		<Textfield
			variant="outlined"
			style="width: 100%;"
			helperLine$style="width: 100%;"
			bind:value={inTitle}
			label="In Title:"
		/>
	</div>
	<div>
		<Textfield
			variant="outlined"
			style="width: 100%;"
			helperLine$style="width: 100%;"
			bind:value={inUrl}
			label="In URL:"
		/>
	</div>
	<div>
		<Textfield
			variant="outlined"
			style="width: 100%;"
			helperLine$style="width: 100%;"
			bind:value={domain}
			label="Domain:"
		/>
	</div>
	<div>
		<Textfield
			variant="outlined"
			style="width: 100%;"
			helperLine$style="width: 100%;"
			bind:value={fileType}
			label="File Type:"
		/>
	</div>
	<div>
		<Textfield
			variant="outlined"
			style="width: 100%;"
			helperLine$style="width: 100%;"
			bind:value={textQuery}
			label="Text Query:"
		/>
	</div>
</div>

<style>
	div {
		width: 100%;
		margin: 0.7rem 0;
	}
</style>
