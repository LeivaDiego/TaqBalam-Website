// @UI/ScrollToTop.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop({ routeBehavior = 'instant', hashBehavior = 'smooth' }) {
	const { pathname, hash } = useLocation()

	useEffect(() => {
		let tid
		if (hash) {
			requestAnimationFrame(() => {
				const el = document.querySelector(hash)
				if (el) el.scrollIntoView({ behavior: hashBehavior, block: 'start' })
			})
		} else {
			const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: routeBehavior })
			// after paint
			requestAnimationFrame(() => {
				toTop()
				// after any late restoration
				tid = setTimeout(toTop, 0)
			})
		}
		return () => clearTimeout(tid)
	}, [pathname, hash, routeBehavior, hashBehavior])

	return null
}
