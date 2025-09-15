// Utility function to combine class names with Tailwind CSS support
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines class names using clsx and merges Tailwind CSS classes using twMerge.
 * @param  {...any} inputs
 * @returns {string} The merged class names.
 */
export function cn(...inputs) {
	return twMerge(clsx(inputs))
}
