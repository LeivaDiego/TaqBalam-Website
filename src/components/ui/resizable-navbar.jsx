import { cn } from '@Lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import React, { useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '@Images/TaqBalam-Logo.svg'

export const Navbar = ({ children, className }) => {
	const ref = useRef(null)
	const { scrollY } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})
	const [visible, setVisible] = useState(false)
	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest > 100) {
			setVisible(true)
		} else {
			setVisible(false)
		}
	})
	return (
		<motion.div ref={ref} className={cn('fixed inset-x-0 top-0 z-40 w-full', className)}>
			{React.Children.map(children, (child) =>
				React.isValidElement(child) ? React.cloneElement(child, { visible }) : child,
			)}
		</motion.div>
	)
}

export const NavBody = ({ children, className, visible }) => {
	return (
		<motion.div
			animate={{
				backdropFilter: visible ? 'blur(10px)' : 'none',
				boxShadow: visible ? 'var(--shadow-nav)' : 'none',
				width: visible ? '40%' : '100%',
				y: visible ? 20 : 0,
			}}
			transition={{ type: 'spring', stiffness: 220, damping: 50 }}
			style={{
				minWidth: '950px',
				'--shadow-nav': '0 0 0 1px var(--color-ring), 0 10px 40px rgba(0,0,0,.35)',
			}}
			className={cn(
				`relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between
				rounded-full px-4 py-2 lg:flex`,
				visible ? 'bg-bg/70 ring-1 ring-[var(--color-ring)]' : 'bg-transparent',
				className,
			)}
		>
			{children}
		</motion.div>
	)
}

export const NavItems = ({ items, className, onItemClick }) => {
	const [hovered, setHovered] = useState(null)
	return (
		<motion.nav
			onMouseLeave={() => setHovered(null)}
			className={cn(
				'absolute inset-0 hidden flex-1 items-center justify-center space-x-2 text-sm lg:flex',
				'text-muted transition-colors hover:text-text',
				className,
			)}
		>
			{items.map((item, idx) => {
				const isRouter = 'to' in item
				const Comp = isRouter ? NavLink : 'a'
				const linkProps = isRouter
					? { to: item.to, end: item.end ?? item.to === '/' }
					: { href: item.href }
				return (
					<Comp
						key={idx}
						{...linkProps}
						onMouseEnter={() => setHovered(idx)}
						onClick={onItemClick}
						className={({ isActive }) =>
							cn(
								'relative rounded-full px-4 py-2 transition-colors',
								'hover:text-brand-300',
								isRouter && isActive && 'font-semibold text-brand-300',
							)
						}
					>
						{hovered === idx && (
							<motion.div
								layoutId="hovered"
								className={`absolute inset-0 h-full w-full rounded-full bg-brand-400/15 ring-1
								ring-brand-400/30`}
							/>
						)}
						<span className="relative z-20">{item.name}</span>
					</Comp>
				)
			})}
		</motion.nav>
	)
}

export const MobileNav = ({ children, className, visible }) => {
	return (
		<motion.div
			animate={{
				backdropFilter: visible ? 'blur(8px)' : 'blur(0px)',
				boxShadow: visible ? 'var(--shadow-nav)' : 'none',
				width: visible ? '90%' : '100%',
				paddingRight: visible ? 12 : 0,
				paddingLeft: visible ? 12 : 0,
				borderRadius: visible ? 12 : 32,
				y: visible ? 20 : 0,
			}}
			transition={{ type: 'spring', stiffness: 220, damping: 48 }}
			style={{ '--shadow-nav': '0 0 0 1px var(--color-ring), 0 10px 40px rgba(0,0,0,.35)' }}
			className={cn(
				`relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center px-0 py-2
				lg:hidden`,
				visible ? 'bg-bg/70 ring-1 ring-[var(--color-ring)]' : 'bg-transparent',
				className,
			)}
		>
			{children}
		</motion.div>
	)
}

export const MobileNavHeader = ({ children, className }) => {
	return (
		<div className={cn('flex w-full flex-row items-center justify-between', className)}>
			{children}
		</div>
	)
}

export const MobileNavMenu = ({ children, className, isOpen }) => (
	<AnimatePresence>
		{isOpen && (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className={cn(
					'absolute inset-x-0 top-16 z-50 flex w-full flex-col gap-2 rounded-xl px-4 py-4',
					'bg-card shadow-[0_0_0_1px_var(--color-ring),0_12px_48px_rgba(0,0,0,.35)]',
					className,
				)}
			>
				{children}
			</motion.div>
		)}
	</AnimatePresence>
)

export const MobileNavToggle = ({ isOpen, onClick }) => {
	return isOpen ? (
		<IconX className="text-black dark:text-white" onClick={onClick} />
	) : (
		<IconMenu2 className="text-black dark:text-white" onClick={onClick} />
	)
}

export const NavbarLogo = () => {
	const { pathname } = useLocation()
	const onClick = (e) => {
		if (pathname === '/') {
			e.preventDefault()
			requestAnimationFrame(() => {
				document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
			})
		}
	}
	return (
		<NavLink
			to={{ pathname: '/', hash: '#hero' }}
			onClick={onClick}
			className="relative z-20 mr-4 flex items-center gap-2 px-2 py-1 text-sm"
		>
			<img src={logo} alt="logo" width={30} height={30} />
			<span className="font-cinzel text-text">Taq ' Balam</span>
		</NavLink>
	)
}
