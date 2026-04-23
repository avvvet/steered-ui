<script>
	import { onMount } from 'svelte'
	import { track } from '$lib/analytics.js'
	import Hero from '$lib/components/Hero.svelte'
	import Install from '$lib/components/Install.svelte'
	import HowItWorks from '$lib/components/HowItWorks.svelte'
	import Video from '$lib/components/Video.svelte'
	import Comparison from '$lib/components/Comparison.svelte'
	import Footer from '$lib/components/Footer.svelte'

	onMount(() => {
		track('page_view')
	})
</script>

<main>
	<Hero />
	<Install />
	<HowItWorks />
	<Video />
	<Comparison />
	<Footer />
</main>

<style>
	main {
		min-height: 100vh;
	}
</style>
