import { cn } from '@Lib/utils'
import React from 'react'
import { motion } from 'motion/react'

export function BackgroundGradient({
	children,
	className,
	containerClassName,
	animate = true,
	borderWidth = 4,
	radius = 22,
}) {
	const variants = {
		initial: { backgroundPosition: '0% 50%' },
		animate: { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] },
	}

	const styleVars = {
		'--bw': `${borderWidth}px`,
		'--r': `${radius}px`,
		'--c1': 'var(--color-brand-500)',
		'--c2': 'var(--color-brand-300)',
		'--c3': 'var(--color-brand-400)',
		'--c4': 'var(--color-brand-800)',
		'--base': 'var(--color-bg)',
	}

	const bgClass =
		'bg-[radial-gradient(circle_farthest-side_at_0%_100%,var(--c1)_0%,transparent_60%),radial-gradient(circle_farthest-side_at_100%_0%,var(--c2)_0%,transparent_60%),radial-gradient(circle_farthest-side_at_100%_100%,var(--c3)_0%,transparent_60%),radial-gradient(circle_farthest-side_at_0%_0%,var(--c4)_0%,var(--base)_70%)]'

	return (
		<div className={cn('group relative inline-block', containerClassName)} style={styleVars}>
			{/* Padding equals border thickness; outer radius = inner radius */}
			<div className="relative rounded-[var(--r)] p-[var(--bw)]">
				{/* Glow */}
				<motion.div
					variants={animate ? variants : undefined}
					initial={animate ? 'initial' : undefined}
					animate={animate ? 'animate' : undefined}
					transition={
						animate ? { duration: 6, repeat: Infinity, repeatType: 'reverse' } : undefined
					}
					style={{ backgroundSize: animate ? '400% 400%' : undefined }}
					className={cn(
						`absolute inset-0 z-[1] rounded-[inherit] opacity-60 blur-xl transition duration-500
						will-change-transform group-hover:opacity-100`,
						bgClass,
					)}
				/>
				{/* Crisp */}
				<motion.div
					variants={animate ? variants : undefined}
					initial={animate ? 'initial' : undefined}
					animate={animate ? 'animate' : undefined}
					transition={
						animate ? { duration: 6, repeat: Infinity, repeatType: 'reverse' } : undefined
					}
					style={{ backgroundSize: animate ? '400% 400%' : undefined }}
					className={cn('absolute inset-0 z-[1] rounded-[inherit] will-change-transform', bgClass)}
				/>

				{/* Child surface goes here. You control bg and radius. */}
				<div className={cn('relative z-10 rounded-[calc(var(--r)-var(--bw))]', className)}>
					{children}
				</div>
			</div>
		</div>
	)
}
