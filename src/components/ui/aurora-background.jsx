// A React component that provides a dynamic aurora-like background effect.
import { cn } from '@Lib/utils'
import React from 'react'

/**
 * AuroraBackground component that provides a dynamic aurora-like background effect.
 * @param {Object} props - Props for the component.
 * @param {string} props.className - Additional class names for the container.
 * @param {React.ReactNode} props.children - Child components to be rendered inside the background.
 * @param {boolean} [props.showRadialGradient=true] - Whether to show the radial gradient effect.
 * @returns {JSX.Element} The AuroraBackground component.
 */
export const AuroraBackground = ({
	className,
	children,
	showRadialGradient = true,
	...props
}) => {
	// Define CSS variables for colors and gradients
	return (
		// Container div with relative positioning and minimum height of the screen
		<div className={cn('relative min-h-screen', className)} {...props}>
			<div
				// Background gradient layer
				className={'pointer-events-none fixed inset-0 -z-10 overflow-hidden'}
				style={{
					'--aurora':
						'repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)',
					'--dark-gradient':
						'repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)',
					'--white-gradient':
						'repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)',
					'--blue-300': '#93c5fd',
					'--blue-400': '#60a5fa',
					'--blue-500': '#3b82f6',
					'--indigo-300': '#a5b4fc',
					'--violet-200': '#ddd6fe',
					'--black': '#000',
					'--white': '#fff',
					'--transparent': 'transparent',
				}}
			>
				<div
					// Aurora effect layer with animations and blending
					className={cn(
						`pointer-events-none absolute -inset-[10px]
						[background-image:var(--white-gradient),var(--aurora)]
						[background-size:300%,_200%] [background-position:50%_50%,50%_50%]
						opacity-50 blur-[10px] invert filter will-change-transform
						[--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
						[--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
						[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
						after:absolute after:inset-0 after:animate-aurora
						after:[background-image:var(--white-gradient),var(--aurora)]
						after:[background-size:200%,_100%]
						after:[background-attachment:fixed] after:mix-blend-difference
						after:content-[""]
						dark:[background-image:var(--dark-gradient),var(--aurora)]
						dark:invert-0
						after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
						showRadialGradient &&
							'[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]',
					)}
				/>
			</div>
			{/* Main content area */}
			<main className="relative z-10">{children}</main>
		</div>
	)
}
