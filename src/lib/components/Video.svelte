<script>
	import { track } from '$lib/analytics.js'

	let tracked = false

	function handlePlay() {
		if (!tracked) {
			track('video_play')
			tracked = true
		}
	}
</script>

<section class="video-section" id="demo">
	<div class="inner">
		<p class="label">demo</p>
		<div class="player">
			<!-- Replace src with your actual video file path or URL -->
			<video
				controls
				preload="metadata"
				on:play={handlePlay}
				poster="/demo-poster.png"
			>
				<source src="/steered-demo.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
		<p class="caption">real cluster · real issues · 1 min 30 sec</p>
	</div>
</section>

<style>
	.video-section {
		padding: 2rem 1.5rem;
		border-bottom: 1px solid var(--border);
		display: flex;
		justify-content: center;
	}

	.inner {
		width: 100%;
		max-width: 1200px;
	}

	.label {
		font-family: var(--mono);
		font-size: 0.7rem;
		color: var(--hint);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 1rem;
		text-align: center;
	}

	.player {
		border: 1px solid var(--border);
		border-radius: 8px;
		overflow: hidden;
		background: var(--surface);
		aspect-ratio: 16/9;
	}

	video {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}

	.caption {
		font-family: var(--mono);
		font-size: 0.7rem;
		color: var(--hint);
		text-align: center;
		margin-top: 0.85rem;
		letter-spacing: 0.03em;
	}
</style>
