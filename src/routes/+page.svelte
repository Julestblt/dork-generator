<script>
	import Card, { Content, Actions } from '@smui/card';
	import { goto } from '$app/navigation';
	import Button, { Label } from '@smui/button';
</script>

<main>
	<h1>Welcome to the Dork Tool</h1>
	<h3>
		This tool assists you in creating advanced search queries for specific platforms. Whether you're
		looking to refine your searches on Google or seeking specific data on Github, we've got you
		covered!
	</h3>

	<div class="platforms">
		<div class="card-container">
			<Card>
				<Content>Google Dorks</Content>
				<p>
					Master the art of advanced search techniques on the world's most popular search engine.
				</p>
				<Actions fullBleed>
					<Button style="font-weight:bold" on:click={() => goto('/google')}>
						<Label>Go to</Label>
						<i class="material-icons" aria-hidden="true">arrow_forward</i>
					</Button>
				</Actions>
			</Card>
		</div>
		<div class="card-container">
			<Card>
				<Content>Github Dorks</Content>
				<p>
					Unlock the potential of finding specific and often sensitive information on Github
					repositories.
				</p>
				<Actions fullBleed>
					<Button style="font-weight:bold" on:click={() => goto('/github')}>
						<Label>Go to</Label>
						<i class="material-icons" aria-hidden="true">arrow_forward</i>
					</Button>
				</Actions>
			</Card>
		</div>
	</div>
</main>

<style>
	.platforms {
		display: flex;
		gap: 2rem;
	}

	p {
		padding: 0 16px;
	}

	h3 {
		margin: 2rem 0;
		font-weight: 400;
	}
</style>
