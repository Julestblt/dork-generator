<script lang="ts">
	import { theme } from '$lib/stores/theme';
</script>

<footer class={$theme === 'dark' ? 'footer-dark' : 'footer-light'}>
	<p>Made with &#9829; by <a href="https://github.com/Julestblt" target="_blank">JuleZ</a></p>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 10vh;
	}
	.footer-dark {
		background-color: #9c27b0;
		color: #fff;
	}
	.footer-light {
		background-color: #283be5;
		color: white;
	}

	a {
		color: inherit;
		text-decoration: none;
		font-weight: bold;
	}
</style>
