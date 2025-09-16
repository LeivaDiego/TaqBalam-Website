// components/ScrollCropVideo.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
	useMotionTemplate,
} from 'motion/react'

/**
 * ScrollCropVideoHero
 * Pinned hero whose "progress" is tied to scroll.
 * - Video itself is NOT scaled; we crop its container via clip-path inset + rounding.
 * - At the end of the section, we dispatch a window event "hero:progress" with detail.progress
 *   so the navbar can morph exactly when the hero is done shrinking.
 *
 * Props:
 * - src, poster (string)
 * - heightVh: total scroll distance (default 180)
 * - maxInsetPct: fallback final crop (if we can't measure target width)
 * - roundPx: final border radius
 * - fadeOutAt: when to fade the overlay title (default 0.35)
 * - title, subtitle, children: overlay content
 * - targetSelector: CSS selector to measure your content max width (default ".max-w-6xl")
 */
export function ScrollCropVideoHero({
	src,
	poster,
	heightVh = 180,
	maxInsetPct = 18,
	roundPx = 32,
	fadeOutAt = 0.35,
	title = 'Engineering Speed',
	subtitle,
	children,
	className = '',
	targetSelector = '.max-w-6xl',
}) {
	const sectionRef = useRef(null)
	const stickyRef = useRef(null)

	// Progress across the whole section (0 → 1)
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start start', 'end start'],
	})

	// --- Measure target container width (e.g., your .max-w-6xl) so the hero ends at that width visually
	const [targetWidth, setTargetWidth] = useState(null) // px
	const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920)

	useEffect(() => {
		const measure = () => {
			setVw(window.innerWidth)
			const el = document.querySelector(targetSelector)
			if (!el) return
			// Use offsetWidth (includes padding); feels right for Tailwind containers.
			setTargetWidth(el.offsetWidth)
		}
		measure()
		const ro = new ResizeObserver(measure)
		const root = document.documentElement
		ro.observe(root)
		const target = document.querySelector(targetSelector)
		if (target) ro.observe(target)
		window.addEventListener('resize', measure)
		return () => {
			ro.disconnect()
			window.removeEventListener('resize', measure)
		}
	}, [targetSelector])

	// Compute the final inset % dynamically so the visible width equals targetWidth.
	// inset% per side = (VW - targetWidth) / (2 * VW) * 100
	const dynamicInsetPct = useMemo(() => {
		if (!targetWidth || !vw) return maxInsetPct
		const perSide = ((vw - targetWidth) / (2 * vw)) * 100
		// Guard: if negative (target wider than vw), do no crop.
		return Math.max(0, perSide)
	}, [targetWidth, vw, maxInsetPct])

	// Animate frame cosmetics
	const inset = useTransform(scrollYProgress, [0, 1], ['0%', `${dynamicInsetPct}%`])
	const radius = useTransform(scrollYProgress, [0, 1], ['0px', `${roundPx}px`])
	const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.18])
	const clipPath = useMotionTemplate`inset(${inset} ${inset})`
	const boxShadow = useMotionTemplate`0 24px 96px rgba(0,0,0, ${shadowOpacity})`

	// Overlay title fades out early
	const uiOpacity = useTransform(scrollYProgress, [0, Math.max(0.01, fadeOutAt)], [1, 0])
	const uiY = useTransform(scrollYProgress, [0, fadeOutAt], ['0%', '12%'])

	// Broadcast progress so the navbar can morph in sync
	useMotionValueEvent(scrollYProgress, 'change', (v) => {
		window.dispatchEvent(new CustomEvent('hero:progress', { detail: { progress: v } }))
	})

	return (
		<section
			ref={sectionRef}
			style={{ height: `${heightVh}vh` }}
			className={`relative ${className}`}
		>
			{/* Sticky, full-viewport frame that crops the video */}
			<motion.div
				ref={stickyRef}
				className="sticky top-0 z-0 h-[100svh] w-[100vw] overflow-hidden"
				style={{
					clipPath,
					borderRadius: radius,
					boxShadow,
					willChange: 'clip-path, border-radius, box-shadow',
				}}
			>
				<video
					className="absolute inset-0 h-[100svh] w-[100vw] object-cover"
					src={src}
					poster={poster}
					autoPlay
					loop
					muted
					playsInline
					preload="metadata"
					disablePictureInPicture
					controls={false}
					aria-label="Hero video"
				/>
			</motion.div>

			{/* Overlay headline/UI that fades out as we start cropping */}
			<motion.div
				className="pointer-events-none absolute inset-0 z-10 grid place-items-center px-6"
				style={{ opacity: uiOpacity, y: uiY }}
			>
				<div className="text-center">
					{title && <h1 className="text-5xl leading-tight font-bold md:text-6xl">{title}</h1>}
					{subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg opacity-80">{subtitle}</p>}
					{children && <div className="pointer-events-auto mt-8">{children}</div>}
				</div>
			</motion.div>
		</section>
	)
}
