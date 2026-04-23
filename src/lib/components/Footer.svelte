<script>
	import { track } from '$lib/analytics.js'

	function handleGitHub() {
		track('github_click')
		window.open('https://github.com/avvvet/steered', '_blank')
	}
</script>

<footer>
	<div class="inner">
		<div class="works-with">
			<span class="label">works with</span>
			<span class="providers">
				<span>ollama</span>
				<span class="dot">·</span>
				<span>openai</span>
				<span class="dot">·</span>
				<span>anthropic</span>
			</span>
		</div>

		<div class="divider"></div>

		<div class="bottom">
			<span class="copy">© 2026 steered</span>
			<nav>
				<button on:click={handleGitHub}>GitHub</button>
				<a href="#install">Install</a>
				<a href="mailto:hello@steered.dev">hello@steered.dev</a>
			</nav>
			<span class="meta">MIT License · v1.0.0</span>
		</div>
		<div class="author">
			built by <a href="https://github.com/avvvet" target="_blank">Awet Tsegazeab</a>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 3rem 1.5rem 2.5rem;
		display: flex;
		justify-content: center;
	}

	.inner {
		width: 100%;
		max-width: 720px;
	}

	.works-with {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		margin-bottom: 2rem;
	}

	.label {
		font-family: var(--mono);
		font-size: 0.7rem;
		color: var(--hint);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		flex-shrink: 0;
	}

	.providers {
		font-family: var(--mono);
		font-size: 0.8rem;
		color: var(--muted);
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.dot {
		color: var(--hint);
	}

	.divider {
		height: 1px;
		background: var(--border);
		margin-bottom: 2rem;
	}

	.bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.author {
		font-family: var(--mono);
		font-size: 0.68rem;
		color: var(--hint);
		margin-top: 1rem;
		text-align: center;
	}

	.author a {
		color: var(--muted);
		text-decoration: none;
		transition: color 0.12s ease;
	}

	.author a:hover {
		color: var(--text);
	}

	.copy, .meta {
		font-family: var(--mono);
		font-size: 0.7rem;
		color: var(--hint);
	}

	nav {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}

	nav a, nav button {
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--muted);
		text-decoration: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		transition: color 0.12s ease;
	}

	nav a:hover, nav button:hover {
		color: var(--text);
	}

	@media (max-width: 540px) {
		.bottom {
			flex-direction: column;
			align-items: flex-start;
		}

		.works-with {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
	}
</style>
