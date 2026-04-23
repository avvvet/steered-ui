<section class="how">
	<div class="inner">
		<div class="steps">
			<div class="step">
				<span class="num">01</span>
				<h3>Run</h3>
				<p>Runs on your machine. Works wherever kubectl is configured. Zero configuration. Zero cluster footprint.</p>
			</div>
			<div class="divider"></div>
			<div class="step">
				<span class="num">02</span>
				<h3>Analyze</h3>
				<p>LLM inspects every resource, finds issues, explains why.</p>
			</div>
			<div class="divider"></div>
			<div class="step">
				<span class="num">03</span>
				<h3>Fix</h3>
				<p>Steered tells you exactly what's wrong and how to fix it. You run the command.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.how {
		padding: 1.5rem;
		border-bottom: 1px solid var(--border);
		display: flex;
		justify-content: center;
	}
	.inner {
		width: 100%;
		max-width: 720px;
	}
	.steps {
		display: flex;
		align-items: flex-start;
	}
	.step {
		flex: 1;
		padding: 0 1.25rem;
	}
	.step:first-child { padding-left: 0; }
	.step:last-child { padding-right: 0; }
	.num {
		font-family: var(--mono);
		font-size: 0.65rem;
		color: var(--hint);
		display: block;
		margin-bottom: 0.3rem;
	}
	h3 {
		font-family: var(--mono);
		font-size: 0.78rem;
		font-weight: 500;
		color: var(--text);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		margin-bottom: 0.3rem;
	}
	p {
		font-size: 0.78rem;
		color: var(--muted);
		line-height: 1.5;
	}
	.divider {
		width: 1px;
		background: var(--border);
		align-self: stretch;
		flex-shrink: 0;
	}
	@media (max-width: 600px) {
		.steps { flex-direction: column; gap: 1rem; }
		.divider { width: 100%; height: 1px; }
		.step { padding: 0; }
	}
</style>