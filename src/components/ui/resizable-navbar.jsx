// A resizable and responsive Navbar component with motion effects.
import { cn } from '@Lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

/**
 * Navbar component for the application
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered inside the navbar
 * @param {string} [props.className] - Additional class names for styling
 * @returns {JSX.Element} The rendered Navbar component
 */
export const Navbar = ({ children, className }) => {
	// Ref for the scroll container
	const ref = useRef(null)
	// Get the scrollY value for the container
	const { scrollY } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})
	// State to track visibility based on scroll position
	const [visible, setVisible] = useState(false)
	// Update visibility state based on scrollY changes
	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest > 100) {
			setVisible(true)
		} else {
			setVisible(false)
		}
	})
	// Render the navbar with motion effects
	return (
		<motion.div
			ref={ref}
			className={cn('fixed inset-x-0 top-0 z-40 w-full', className)}
		>
			{React.Children.map(children, (child) =>
				React.isValidElement(child)
					? React.cloneElement(child, { visible })
					: child,
			)}
		</motion.div>
	)
}

/**
 * Navbar body component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered inside the navbar body
 * @param {string} [props.className] - Additional class names for styling
 * @param {boolean} props.visible - Visibility state to control styling based on scroll position
 * @returns {JSX.Element} The rendered NavBody component
 */
export const NavBody = ({ children, className, visible }) => {
	return (
		// Navbar body with motion effects based on visibility
		<motion.div
			// Animation properties
			animate={{
				backdropFilter: visible ? 'blur(10px)' : 'none',
				boxShadow: visible
					? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
					: 'none',
				width: visible ? '40%' : '100%',
				y: visible ? 20 : 0,
			}}
			// Transition properties
			transition={{
				type: 'spring',
				stiffness: 200,
				damping: 50,
			}}
			// Minimum width to prevent shrinking too much
			style={{
				minWidth: '800px',
			}}
			// Class names for styling
			className={cn(
				`relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center
				justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex
				dark:bg-transparent`,
				visible && 'bg-white/80 dark:bg-neutral-950/80',
				className,
			)}
		>
			{children}
		</motion.div>
	)
}

/**
 * Navigation items component
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of navigation items
 * @param {string} [props.className] - Additional class names for styling
 * @param {Function} [props.onItemClick] - Callback function when an item is clicked
 * @returns {JSX.Element} The rendered NavItems component
 */
export const NavItems = ({ items, className, onItemClick }) => {
	// State to track which item is currently hovered
	const [hovered, setHovered] = useState(null)

	// Render the navigation items
	return (
		// Motion div to handle hover effects and layout
		<motion.div
			// Reset hovered state when mouse leaves the container
			onMouseLeave={() => setHovered(null)}
			// Class names for styling
			className={cn(
				`absolute inset-0 hidden flex-1 flex-row items-center justify-center
				space-x-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-800
				lg:flex`,
				className,
			)}
		>
			{/* Map through the items and render each one */}
			{items.map((item, idx) => {
				const isRouterLink = 'to' in item
				const Comp = isRouterLink ? NavLink : 'a'
				const linkProps = isRouterLink
					? { to: item.to, end: item.end ?? item.to === '/' }
					: { href: item.href }

				// Render the individual navigation item
				return (
					// Use the appropriate component (NavLink or anchor)
					<Comp
						key={idx} // Unique key for each item
						{...linkProps} // Spread link properties
						onMouseEnter={() => setHovered(idx)} // Set hovered state on mouse enter
						onClick={onItemClick} // Handle item click
						// Dynamic class names based on active state
						className={({ isActive }) =>
							cn(
								`relative px-4 py-2 text-neutral-600
								dark:text-neutral-300`,
								isRouterLink && isActive && 'font-semibold',
							)
						}
					>
						{/* Render hover effect if this item is hovered */}
						{hovered === idx && (
							<motion.div
								layoutId="hovered"
								className={`absolute inset-0 h-full w-full rounded-full
								bg-gray-100 dark:bg-neutral-800`}
							/>
						)}
						{/* Item name with z-index to ensure it's above the hover effect */}
						<span className="relative z-20">{item.name}</span>
					</Comp>
				)
			})}
		</motion.div>
	)
}

/**
 * Navigation component for mobile view
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered inside the mobile nav
 * @param {string} [props.className] - Additional class names for styling
 * @param {boolean} props.visible - Visibility state to control styling based on scroll position
 * @returns {JSX.Element} The rendered MobileNav component
 */
export const MobileNav = ({ children, className, visible }) => {
	return (
		// Mobile navigation container with motion effects based on visibility
		<motion.div
			// Animation properties
			animate={{
				backdropFilter: visible ? 'blur(10px)' : 'none',
				boxShadow: visible
					? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
					: 'none',
				width: visible ? '90%' : '100%',
				paddingRight: visible ? '12px' : '0px',
				paddingLeft: visible ? '12px' : '0px',
				borderRadius: visible ? '4px' : '2rem',
				y: visible ? 20 : 0,
			}}
			// Transition properties
			transition={{
				type: 'spring',
				stiffness: 200,
				damping: 50,
			}}
			// Class names for styling
			className={cn(
				`relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col
				items-center justify-between bg-transparent px-0 py-2 lg:hidden`,
				visible && 'bg-white/80 dark:bg-neutral-950/80',
				className,
			)}
		>
			{children}
		</motion.div>
	)
}

/**
 * Mobile navigation header component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered inside the mobile nav header
 * @param {string} [props.className] - Additional class names for styling
 * @returns {JSX.Element} The rendered MobileNavHeader component
 */
export const MobileNavHeader = ({ children, className }) => {
	return (
		// Mobile navigation header container
		<div
			// Class names for styling
			className={cn('flex w-full flex-row items-center justify-between', className)}
		>
			{children}
		</div>
	)
}

/**
 * Mobile navigation menu component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered inside the mobile nav menu
 * @param {string} [props.className] - Additional class names for styling
 * @param {boolean} props.isOpen - State to control the visibility of the menu
 * @returns {JSX.Element} The rendered MobileNavMenu component
 */
export const MobileNavMenu = ({ children, className, isOpen }) => {
	return (
		// AnimatePresence to handle mounting and unmounting with animation
		<AnimatePresence>
			{isOpen && (
				// Motion div for the mobile navigation menu
				// with fade-in and fade-out effects
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={cn(
						`absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start
						justify-start gap-4 rounded-lg bg-white px-4 py-8
						shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]
						dark:bg-neutral-950`,
						className,
					)}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	)
}

/**
 * Mobile navigation toggle button component
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - State to determine if the menu is open or closed
 * @param {Function} props.onClick - Callback function to handle toggle action
 * @returns {JSX.Element} The rendered MobileNavToggle component
 */
export const MobileNavToggle = ({ isOpen, onClick }) => {
	return isOpen ? (
		// Toggle button to close the mobile navigation menu when open
		<IconX className="text-black dark:text-white" onClick={onClick} />
	) : (
		// Toggle button to open the mobile navigation menu when closed
		<IconMenu2 className="text-black dark:text-white" onClick={onClick} />
	)
}

/**
 * Navbar logo component
 * @returns {JSX.Element} The rendered NavbarLogo component
 */
export const NavbarLogo = () => {
	return (
		// Logo component for the navbar
		<NavLink
			to="/"
			className={`relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm
				font-normal`}
		>
			{/* Logo image and text*/}
			<img
				src="https://assets.aceternity.com/logo-dark.png"
				alt="logo"
				width={30}
				height={30}
			/>
			{/* Logo text */}
			<span className="font-medium text-black dark:text-white">Motorsport</span>
		</NavLink>
	)
}
