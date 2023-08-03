<script lang="ts">
	import Textfield from '@smui/textfield';
	import Button, { Label, Icon } from '@smui/button';

	export let result: string;

	const openDork = () => {
		window.open(`https://www.google.ru/search?q=${result}`, '_blank');
	};
</script>

<div class="result">
	<h2>Constructed Result :</h2>
	<Textfield
		input$readonly
		class="shaped-filled"
		variant="filled"
		style="width: 100%;"
		helperLine$style="width: 100%;"
		bind:value={result}
	/>
	<Button variant="raised" style="width: 100%; margin-top: 1rem" on:click={openDork}
		><Label>Open This Dork</Label><Icon class="material-icons">link</Icon></Button
	>
</div>

<style>
	.result {
		width: 48%;
	}
</style>
