// @UI/reveal.jsx
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'motion/react'

export function Reveal({
	children,
	className = '',
	dir = 'up',
	once = false,
	amount = 0.35,
	blur = 12,
	clip = true, // NEW: controls overflow
}) {
	const controls = useAnimation()
	const ref = useRef(null)
	const inView = useInView(ref, { amount, margin: '0px 0px -5% 0px' })

	const delta = 32
	const hiddenByDir = {
		left: { opacity: 0, x: -delta, filter: `blur(${blur}px)` },
		right: { opacity: 0, x: delta, filter: `blur(${blur}px)` },
		up: { opacity: 0, y: delta, filter: `blur(${blur}px)` },
		down: { opacity: 0, y: -delta, filter: `blur(${blur}px)` },
	}[dir]

	useEffect(() => {
		if (inView) {
			controls.start({ opacity: 1, x: 0, y: 0, filter: 'blur(0px)', transition: { duration: 0.5 } })
		} else if (!once) {
			controls.start(hiddenByDir)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView])

	return (
		<div ref={ref} className={`${clip ? 'overflow-hidden' : 'overflow-visible'} ${className}`}>
			<motion.div
				initial={hiddenByDir}
				animate={controls}
				className="transform-gpu will-change-transform"
			>
				{children}
			</motion.div>
		</div>
	)
}
