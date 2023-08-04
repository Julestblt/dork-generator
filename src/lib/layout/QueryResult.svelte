<script lang="ts">
	import Textfield from '@smui/textfield';
	import Button, { Label, Icon } from '@smui/button';
	import IconButton from '@smui/icon-button';

	export let result: string;

	const buildUrl = (query: string) => {
		return `https://www.google.ru/search?q=${query}`;
	};

	const openDork = () => {
		result !== '' && window.open(buildUrl(result), '_blank');
	};

	const sendToClipboard = () => {
		navigator.clipboard.writeText(buildUrl(result));
	};
</script>

<div class="result">
	<h2>Constructed Result :</h2>
	<span>
		<Textfield
			input$readonly
			variant="outlined"
			style="width: 100%;"
			helperLine$style="width: 100%;"
			bind:value={result}
		/>
		<IconButton on:click={sendToClipboard} class="material-icons">content_paste</IconButton>
	</span>
	<Button variant="raised" style="width: 100%; margin-top: 1rem" on:click={openDork}
		><Label>Open This Dork</Label><Icon class="material-icons">link</Icon></Button
	>
</div>

<style>
	.result {
		width: 48%;
	}

	span {
		display: flex;
		align-items: center;
	}
</style>
