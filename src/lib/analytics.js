import { PUBLIC_ANALYTICS_URL, PUBLIC_API_TOKEN } from '$env/static/public'

export async function track(type, extra = {}) {
	try {
		await fetch(`${PUBLIC_ANALYTICS_URL}/track`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${PUBLIC_API_TOKEN}`
			},
			body: JSON.stringify({
				type,
				referrer: document.referrer,
				url: window.location.href,
				...extra
			})
		})
	} catch {
		// silent fail
	}
}