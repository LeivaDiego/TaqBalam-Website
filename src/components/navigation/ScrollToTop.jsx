import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop({ hashBehavior = 'smooth' }) {
	const { hash } = useLocation()

	useEffect(() => {
		if (!hash) return
		// wait for layout
		requestAnimationFrame(() => {
			const el = document.querySelector(hash)
			if (el) el.scrollIntoView({ behavior: hashBehavior, block: 'start' })
		})
	}, [hash, hashBehavior])

	return null
}
