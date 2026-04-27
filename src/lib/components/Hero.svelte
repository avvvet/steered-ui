<script>
	import { track } from '$lib/analytics.js'

	function handleGitHub() {
		track('github_click')
		window.open('https://github.com/steereddev/steered', '_blank')
	}

	function scrollToDemo() {
		document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
	}
</script>

<section class="hero">
	<div class="inner">
	    <img src="/logo.png" alt="steered" class="logo" />
		<div class="wordmark">S T E E R E D</div>
		<p class="desc">It analyzes. You fix.</p>
		<p class="desc2">Zero setup. No dependencies. No cloud. No database.</p>
		<p class="pills">
			<span>Local</span>
			<span class="dot">·</span>
			<span>Private</span>
			<span class="dot">·</span>
			<span>Open Source</span>
		</p>
		<div class="actions">
			<button class="btn-primary" on:click={handleGitHub}>
				<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
					<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
				</svg>
				Star on GitHub
			</button>
			<button class="btn-secondary" on:click={scrollToDemo}>
				Watch Demo ↓
			</button>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 15vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2.5rem 1.5rem;
		border-bottom: 1px solid var(--border);
	}
	.inner {
		max-width: 560px;
	}
	.logo {
		height: 120px;
		object-fit: contain;
		margin-bottom: 1rem;
		opacity: 0.9;
	}
	.wordmark {
		font-family: var(--mono);
		font-size: clamp(1.2rem, 4vw, 1.8rem);
		font-weight: 500;
		letter-spacing: 0.25em;
		color: var(--text);
		margin-bottom: 0.5rem;
	}
	.tagline {
		font-family: var(--sans);
		font-size: 0.875rem;
		font-weight: 300;
		color: var(--muted);
		margin-bottom: 0.75rem;
		font-style: italic;
	}
	.desc {
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--text);
		margin-bottom: 0.2rem;
	}

	.desc2 {
		font-size: 0.78rem;
		font-family: var(--mono);
		color: var(--muted);
		margin-bottom: 1rem;
		letter-spacing: 0.02em;
	}
	.pills {
		font-family: var(--mono);
		font-size: 0.72rem;
		color: var(--hint);
		margin-bottom: 1.5rem;
		letter-spacing: 0.03em;
	}
	.dot {
		margin: 0 0.4rem;
	}
	.actions {
		display: flex;
		gap: 0.6rem;
		justify-content: center;
		flex-wrap: wrap;
	}
	button {
		font-family: var(--mono);
		font-size: 0.78rem;
		cursor: pointer;
		padding: 0.45rem 1rem;
		border-radius: 4px;
		transition: all 0.15s ease;
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
	}
	.btn-primary {
		background: var(--text);
		color: var(--bg);
		border: 1px solid var(--text);
	}
	.btn-primary:hover {
		background: #333;
		border-color: #333;
	}
	.btn-secondary {
		background: transparent;
		color: var(--muted);
		border: 1px solid var(--border);
	}
	.btn-secondary:hover {
		border-color: var(--hint);
		color: var(--text);
	}
</style>
