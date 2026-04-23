<script>
	import { track } from '$lib/analytics.js'

	let copied = false

	const command = 'curl -fsSL https://steered.dev/install | sudo sh'

	async function copy() {
		try {
			await navigator.clipboard.writeText(command)
			copied = true
			track('install_copy')
			setTimeout(() => { copied = false }, 2000)
		} catch {
			// fallback silent fail
		}
	}
</script>

<section class="install" id="install">
	<div class="inner">
		<p class="label">install</p>
		<div class="terminal">
			<div class="prompt">
				<span class="dollar">$</span>
				<span class="cmd">{command}</span>
			</div>
			<button class="copy-btn" on:click={copy} aria-label="Copy install command">
				{#if copied}
					<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
						<path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
					</svg>
					copied
				{:else}
					<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
						<path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"/>
					</svg>
					copy
				{/if}
			</button>
		</div>
		<p class="footnote">works on linux · macos · requires kubectl + LLM</p>
	</div>
</section>

<style>
.install {
    padding: 1.5rem 1.5rem;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: center;
}

	.inner {
		width: 100%;
		max-width: 640px;
	}

.label {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--hint);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}

	.terminal {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 1rem 1.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.prompt {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		overflow: hidden;
	}

	.dollar {
		font-family: var(--mono);
		font-size: 0.85rem;
		color: var(--green);
		flex-shrink: 0;
	}

	.cmd {
		font-family: var(--mono);
		font-size: 0.82rem;
		color: var(--text);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.copy-btn {
		font-family: var(--mono);
		font-size: 0.72rem;
		color: var(--muted);
		background: var(--bg);
		border: 1px solid var(--border);
		border-radius: 4px;
		padding: 0.3rem 0.65rem;
		cursor: pointer;
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		transition: all 0.12s ease;
	}

	.copy-btn:hover {
		border-color: var(--hint);
		color: var(--text);
	}

	.footnote {
		font-family: var(--mono);
		font-size: 0.7rem;
		color: var(--hint);
		margin-top: 0.85rem;
		text-align: center;
		letter-spacing: 0.03em;
	}
</style>
