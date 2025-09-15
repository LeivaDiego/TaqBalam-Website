// This component ensures that when navigating to a new route, the page scrolls to the top
// or to a specific element if a hash is present in the URL.
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the top of the page or a specific element.
 * @param {Object} props
 * @param {'auto' | 'smooth'} [props.behavior='auto'] - The scroll behavior.
 * @returns {null} - This component does not render anything.
 */
export default function ScrollToTop({ behavior = 'auto' }) {
	// Get the current pathname and hash from the URL
	const { pathname, hash } = useLocation()

	// Scroll to top or to the element with the ID matching the hash
	useEffect(() => {
		// If navigating to a hash (#section), let the browser jump to it
		if (hash) {
			// slight delay lets the target render first
			requestAnimationFrame(() => {
				const el = document.querySelector(hash)
				if (el) el.scrollIntoView({ behavior })
			})
			// Otherwise, scroll to the top of the page
		} else {
			window.scrollTo({ top: 0, left: 0, behavior })
		}
	}, [pathname, hash, behavior])

	return null
}
