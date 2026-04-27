import { PUBLIC_API_TOKEN } from '$env/static/public'

export async function GET({ request }) {
	fetch('https://analytics.steered.dev/track', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${PUBLIC_API_TOKEN}`
		},
		body: JSON.stringify({
			type: 'install_download',
			referrer: request.headers.get('referer') || ''
		})
	}).catch(() => {})

	return new Response(null, {
		status: 302,
		headers: {
			location: 'https://raw.githubusercontent.com/steereddev/steered/main/install.sh'
		}
	})
}