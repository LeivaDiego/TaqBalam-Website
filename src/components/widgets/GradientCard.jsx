import React from 'react'
import { BackgroundGradient } from '@UI/background-gradient'
import { cn } from '@Lib/utils'

export function GradientCard({
	children,
	className,
	borderWidth = 4,
	radius = 22,
	padding = 'p-4 sm:p-10',
	...props
}) {
	return (
		<BackgroundGradient
			borderWidth={borderWidth}
			radius={radius}
			{...props}
			className={cn('w-full max-w-xl bg-bg', padding, className)}
		>
			{children}
		</BackgroundGradient>
	)
}
