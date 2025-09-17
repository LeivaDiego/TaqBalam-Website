import React from 'react'
import { cn } from '@Lib/utils'
import { HoverBorderGradient } from '@UI/hover-border-gradient'

export function HoverBorderButton({
	as = 'button',
	label,
	children, // falls back if label not provided
	icon, // ReactNode (optional)
	imageSrc, // string (optional)
	imageAlt = '',
	size = 'md', // 'sm' | 'md' | 'lg'
	rounded = 'rounded-full',
	bgClassName = 'bg-bg',
	textClassName = 'text-text',
	containerClassName,
	className,
	...props // href, onClick, etc.
}) {
	const pad = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2',
		lg: 'px-5 py-3 text-lg',
	}[size]

	return (
		<HoverBorderGradient
			as={as}
			containerClassName={cn(rounded, containerClassName)}
			className={cn(
				'inline-flex items-center gap-2 rounded-[inherit]',
				pad,
				bgClassName,
				textClassName,
				className,
			)}
			{...props}
		>
			{imageSrc ? (
				<img src={imageSrc} alt={imageAlt} className="h-4 w-4 rounded-[4px] object-cover" />
			) : (
				(icon ?? null)
			)}
			{label ?? children}
		</HoverBorderGradient>
	)
}
