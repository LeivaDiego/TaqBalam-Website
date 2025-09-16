import React from 'react'
import { BackgroundGradient } from '@UI/background-gradient'
import { cn } from '@Lib/utils'

export function GradientCard({ children, className, ...props }) {
	return (
		<BackgroundGradient
			borderWidth={4}
			radius={22}
			{...props}
			className={cn('w-full max-w-xl bg-bg p-4 sm:p-10', className)}
		>
			{children}
		</BackgroundGradient>
	)
}
