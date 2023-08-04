<script>
	import { Footer, Header } from '$lib/layout';
</script>

<section class="layout">
	<main class="main">
		<Header />
		<slot />
	</main>
</section>
<Footer />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.layout {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 90vh;
	}
	.main {
		flex-grow: 1;
		max-width: 80%;
		display: flex;
		flex-direction: column;
	}
	@media screen and (min-width: 900px) {
		.layout {
			flex-direction: row;
		}
		.main {
			width: 80%;
		}
	}
</style>
