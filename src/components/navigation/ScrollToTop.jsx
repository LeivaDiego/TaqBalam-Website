import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop({ behavior = 'auto' }) {
	const { pathname, hash } = useLocation()

	useEffect(() => {
		// If navigating to a hash (#section), let the browser jump to it
		if (hash) {
			// slight delay lets the target render first
			requestAnimationFrame(() => {
				const el = document.querySelector(hash)
				if (el) el.scrollIntoView({ behavior })
			})
		} else {
			window.scrollTo({ top: 0, left: 0, behavior })
		}
	}, [pathname, hash, behavior])

	return null
}
