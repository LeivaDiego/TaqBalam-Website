import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { cn } from '@Lib/utils'

export function HoverBorderGradient({
	children,
	containerClassName,
	className,
	as: Tag = 'button',
	duration = 1,
	clockwise = true,
	...props
}) {
	const [hovered, setHovered] = useState(false)
	const [direction, setDirection] = useState('TOP')

	const rotateDirection = (d) => {
		const dirs = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT']
		const i = dirs.indexOf(d)
		return clockwise ? (i - 1 + dirs.length) % dirs.length : (i + 1) % dirs.length
	}

	// use theme vars
	const movingMap = {
		TOP: 'radial-gradient(20.7% 50% at 50% 0%,     var(--glow) 0%, transparent 100%)',
		LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%,    var(--glow) 0%, transparent 100%)',
		BOTTOM: 'radial-gradient(20.7% 50% at 50% 100%,    var(--glow) 0%, transparent 100%)',
		RIGHT: 'radial-gradient(16.2% 41.2% at 100% 50%,  var(--glow) 0%, transparent 100%)',
	}
	const highlight = 'radial-gradient(75% 181% at 50% 50%, var(--ring) 0%, transparent 100%)'

	useEffect(() => {
		if (hovered) return
		const id = setInterval(
			() => setDirection((p) => ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'][rotateDirection(p)]),
			duration * 1000,
		)
		return () => clearInterval(id)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hovered])

	return (
		<Tag
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={cn(
				'relative flex h-min w-fit items-center justify-center gap-2 overflow-visible',
				'rounded-full border border-border p-px transition duration-500',
				'bg-bg/20 hover:bg-bg/10', // was black/white
				containerClassName,
			)}
			{...props}
		>
			<div className={cn('z-10 w-auto rounded-[inherit] bg-bg px-4 py-2 text-text', className)}>
				{children}
			</div>

			<motion.div
				className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
				style={{
					'--glow': 'var(--color-glow)', // = brand-200
					'--ring': 'var(--color-ring)', // = brand-400
					filter: 'blur(2px)',
					position: 'absolute',
					width: '100%',
					height: '100%',
				}}
				initial={{ background: movingMap[direction] }}
				animate={{ background: hovered ? [movingMap[direction], highlight] : movingMap[direction] }}
				transition={{ ease: 'linear', duration: duration ?? 1 }}
			/>

			{/* inner mask to keep a clean border */}
			<div className="absolute inset-[2px] z-[1] rounded-[inherit] bg-bg" />
		</Tag>
	)
}
