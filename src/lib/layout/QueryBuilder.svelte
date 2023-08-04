<script lang="ts">
	import Textfield from '@smui/textfield';
	import IconButton from '@smui/icon-button';

	export let inTitle: string, inUrl: string, domain: string, fileType: string, textQuery: string;
</script>

<div class="query-builder">
	<h2>Build the Query</h2>
	<div>
		<Textfield
			variant="outlined"
			style="width: 100%;display: flex;align-items: center;"
			helperLine$style="width: 100%;"
			bind:value={inTitle}
			label="In Title:"
		>
			<IconButton
				tabindex={-1}
				on:click={() => (inTitle = '')}
				class="material-icons"
				slot="trailingIcon"
			>
				delete
			</IconButton>
		</Textfield>
	</div>
	<div>
		<Textfield
			variant="outlined"
			style="width: 100%;display: flex;align-items: center;"
			helperLine$style="width: 100%;"
			bind:value={inUrl}
			label="In URL:"
		>
			<IconButton
				tabindex={-1}
				on:click={() => (inUrl = '')}
				class="material-icons"
				slot="trailingIcon"
			>
				delete
			</IconButton>
		</Textfield>
	</div>
	<div>
		<Textfield
			variant="outlined"
			style="width: 100%;display: flex;align-items: center;"
			helperLine$style="width: 100%;"
			bind:value={domain}
			label="Domain:"
		>
			<IconButton
				tabindex={-1}
				on:click={() => (domain = '')}
				class="material-icons"
				slot="trailingIcon"
			>
				delete
			</IconButton>
		</Textfield>
	</div>
	<div>
		<Textfield
			variant="outlined"
			style="width: 100%;display: flex;align-items: center;"
			helperLine$style="width: 100%;"
			bind:value={fileType}
			label="File Type:"
		>
			<IconButton
				tabindex={-1}
				on:click={() => (fileType = '')}
				class="material-icons"
				slot="trailingIcon"
			>
				delete
			</IconButton>
		</Textfield>
	</div>
	<div>
		<Textfield
			variant="outlined"
			style="width: 100%;display: flex;align-items: center;"
			helperLine$style="width: 100%;"
			bind:value={textQuery}
			label="Text Query:"
		>
			<IconButton
				tabindex={-1}
				on:click={() => (textQuery = '')}
				class="material-icons"
				slot="trailingIcon"
			>
				delete
			</IconButton>
		</Textfield>
	</div>
</div>

<style>
	div {
		width: 100%;
		margin: 0.7rem 0;
	}
</style>
