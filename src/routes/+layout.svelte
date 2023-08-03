<section class="layout">
	<main class="main">
		<slot />
	</main>
</section>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
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
