const ANALYTICS_URL = 'https://analytics.steered.dev'

export async function track(type, extra = {}) {
	try {
		await fetch(`${ANALYTICS_URL}/track`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				type,
				referrer: document.referrer,
				url: window.location.href,
				...extra
			})
		})
	} catch {
		// silent fail — never break user experience
	}
}
