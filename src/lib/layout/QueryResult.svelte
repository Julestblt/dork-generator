<script lang="ts">
	import Textfield from '@smui/textfield';
	import Button, { Label, Icon } from '@smui/button';
	import IconButton from '@smui/icon-button';

	export let result: string;
	export let type: 'google' | 'github' = 'google';

	const buildUrl = (query: string) => {
		switch (type) {
			case 'google':
				return `https://www.google.ru/search?q=${query}`;
			case 'github':
				return `https://github.com/search?q=${query}&type=code`;
		}
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
			style="width: 100%;display: flex;align-items: center;"
			helperLine$style="width: 100%;"
			bind:value={result}
		>
			<IconButton
				tabindex={-1}
				on:click={sendToClipboard}
				class="material-icons"
				slot="trailingIcon"
			>
				content_paste
			</IconButton>
		</Textfield>
	</span>
	<Button
		disabled={result === ''}
		variant="raised"
		style="width: 100%; margin-top: 1rem"
		on:click={openDork}
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
