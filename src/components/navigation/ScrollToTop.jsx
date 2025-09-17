import { useEffect } from 'react'

export default function ScrollToTop({ behavior = 'auto' }) {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
		const onLoadHash = () => {
			const { hash } = window.location
			if (hash) document.querySelector(hash)?.scrollIntoView({ behavior })
		}
		onLoadHash()
	}, [behavior])
	return null
}
