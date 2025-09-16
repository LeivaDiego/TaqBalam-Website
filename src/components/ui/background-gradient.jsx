import { cn } from '@Lib/utils'
import React from 'react'
import { motion } from 'motion/react'

export const BackgroundGradient = ({ children, className, containerClassName, animate = true }) => {
	const variants = {
		initial: { backgroundPosition: '0% 50%' },
		animate: { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] },
	}

	return (
		<div className={cn('group relative p-[4px]', containerClassName)}>
			{/* GLOW layer */}
			<motion.div
				variants={animate ? variants : undefined}
				initial={animate ? 'initial' : undefined}
				animate={animate ? 'animate' : undefined}
				transition={animate ? { duration: 6, repeat: Infinity, repeatType: 'reverse' } : undefined}
				style={{
					/* map palette to local vars */
					'--c1': 'var(--color-brand-500)',
					'--c2': 'var(--color-brand-300)',
					'--c3': 'var(--color-brand-400)',
					'--c4': 'var(--color-brand-800)',
					'--base': 'var(--color-bg)',
					backgroundSize: animate ? '400% 400%' : undefined,
				}}
				className={cn(
					`absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition duration-500
					will-change-transform group-hover:opacity-100`,
					// four green-biased radial spots over dark base
					'bg-[radial-gradient(circle_farthest-side_at_0%_100%,var(--c1)_0%,transparent_60%),radial-gradient(circle_farthest-side_at_100%_0%,var(--c2)_0%,transparent_60%),radial-gradient(circle_farthest-side_at_100%_100%,var(--c3)_0%,transparent_60%),radial-gradient(circle_farthest-side_at_0%_0%,var(--c4)_0%,var(--base)_70%)]',
				)}
			/>

			{/* CRISP layer */}
			<motion.div
				variants={animate ? variants : undefined}
				initial={animate ? 'initial' : undefined}
				animate={animate ? 'animate' : undefined}
				transition={animate ? { duration: 6, repeat: Infinity, repeatType: 'reverse' } : undefined}
				style={{
					'--c1': 'var(--color-brand-500)',
					'--c2': 'var(--color-brand-300)',
					'--c3': 'var(--color-brand-400)',
					'--c4': 'var(--color-brand-800)',
					'--base': 'var(--color-bg)',
					backgroundSize: animate ? '400% 400%' : undefined,
				}}
				className={cn(
					'absolute inset-0 z-[1] rounded-3xl will-change-transform',
					'bg-[radial-gradient(circle_farthest-side_at_0%_100%,var(--c1)_0%,transparent_60%),radial-gradient(circle_farthest-side_at_100%_0%,var(--c2)_0%,transparent_60%),radial-gradient(circle_farthest-side_at_100%_100%,var(--c3)_0%,transparent_60%),radial-gradient(circle_farthest-side_at_0%_0%,var(--c4)_0%,var(--base)_70%)]',
				)}
			/>

			{/* Section content */}
			<div className={cn('relative z-10 rounded-2xl bg-surface', className)}>{children}</div>
		</div>
	)
}
