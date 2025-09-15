import { cn } from '@Lib/utils'
import React from 'react'
import { motion } from 'motion/react'

/**
 * GradientCard component with animated background.
 * @param {Object} param0 - Component props.
 * @param {React.ReactNode} param0.children - Child elements to render inside the card.
 * @param {string} param0.className - Additional CSS classes for the card.
 * @returns {JSX.Element} The rendered GradientCard component.
 */
export const GradientCard = ({
	children,
	className,
	containerClassName,
	animate = true,
}) => {
	// Animation variants for the gradient background
	const variants = {
		initial: {
			backgroundPosition: '0 50%',
		},
		animate: {
			backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
		},
	}
	// Render the gradient card with optional animation
	return (
		<div className={cn('group relative p-[4px]', containerClassName)}>
			{/* Animated gradient background layer */}
			<motion.div
				variants={animate ? variants : undefined}
				initial={animate ? 'initial' : undefined}
				animate={animate ? 'animate' : undefined}
				// Animation transition settings
				transition={
					animate
						? {
								duration: 5,
								repeat: Infinity,
								repeatType: 'reverse',
							}
						: undefined
				}
				// Background size for smooth animation
				style={{
					backgroundSize: animate ? '400% 400%' : undefined,
				}}
				// Gradient background with blur and opacity for a glowing effect
				className={cn(
					`absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition
					duration-500 will-change-transform group-hover:opacity-100`,
					'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]',
				)}
			/>
			{/* Static gradient background layer for depth */}
			<motion.div
				variants={animate ? variants : undefined}
				initial={animate ? 'initial' : undefined}
				animate={animate ? 'animate' : undefined}
				// Animation transition settings
				transition={
					animate
						? {
								duration: 5,
								repeat: Infinity,
								repeatType: 'reverse',
							}
						: undefined
				}
				// Background size for smooth animation
				style={{
					backgroundSize: animate ? '400% 400%' : undefined,
				}}
				// Solid gradient background
				className={cn(
					'absolute inset-0 z-[1] rounded-3xl will-change-transform',
					'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]',
				)}
			/>
			<div className={cn('relative z-10', className)}>{children}</div>
		</div>
	)
}
