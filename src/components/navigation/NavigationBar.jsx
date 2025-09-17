// @Navigation/NavigationBar.jsx
import {
	Navbar,
	NavBody,
	MobileNav,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from '@UI/resizable-navbar'
import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { cn } from '@Lib/utils'
import logo from '@Images/TaqBalam-Logo.svg'

const HERO_ID = 'home'
const SECTIONS = [
	{ name: 'Nosotros', id: 'about' },
	{ name: 'Patrocinadores', id: 'sponsors' },
	{ name: 'Temporada 2025', id: 'season' },
	{ name: 'Galería', id: 'gallery' },
	{ name: 'Únete', id: 'patrocinio' },
	{ name: 'Historia', id: 'historia' },
	{ name: 'Contáctanos', id: 'contacto' },
]

// Active = last section whose top crossed a reference line near viewport center.
function computeActiveId(ids, headerOffsetPx = 72, bias = 0.4) {
	const y = window.scrollY
	const ref = y + headerOffsetPx + window.innerHeight * bias
	let active = HERO_ID
	for (const id of ids) {
		const el = document.getElementById(id)
		if (!el) continue
		const top = el.getBoundingClientRect().top + y
		if (top <= ref) active = id
	}
	if (window.innerHeight + y >= document.body.scrollHeight - 1) {
		active = ids[ids.length - 1]
	}
	return active
}

export function NavigationBar() {
	const { hash } = useLocation()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	// scroll spy
	const spyIds = useMemo(() => [HERO_ID, ...SECTIONS.map((s) => s.id)], [])
	const [spyId, setSpyId] = useState(null)

	useEffect(() => {
		let raf = 0
		const onScroll = () => {
			cancelAnimationFrame(raf)
			raf = requestAnimationFrame(() => setSpyId(computeActiveId(spyIds, 72)))
		}
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		window.addEventListener('resize', onScroll)
		return () => {
			cancelAnimationFrame(raf)
			window.removeEventListener('scroll', onScroll)
			window.removeEventListener('resize', onScroll)
		}
	}, [spyIds])

	// recompute on hash jumps
	useEffect(() => {
		requestAnimationFrame(() => setSpyId(computeActiveId(spyIds, 72)))
		setTimeout(() => setSpyId(computeActiveId(spyIds, 72)), 50)
	}, [hash, spyIds])

	const isActiveSection = (id) => (spyId ? spyId === id : hash === `#${id}`)

	return (
		<div className="relative w-full">
			<Navbar>
				<NavBody>
					<LogoLink />

					<DesktopItems isActiveSection={isActiveSection} />

					<div className="w-[80px] lg:hidden" />
				</NavBody>

				<MobileNav>
					<MobileNavHeader>
						<LogoLink />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((v) => !v)}
						/>
					</MobileNavHeader>

					<MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
						{SECTIONS.map((s) => (
							<NavLink
								key={s.id}
								to={{ pathname: '/', hash: `#${s.id}` }}
								onClick={() => setIsMobileMenuOpen(false)}
								className={({ isActive }) =>
									cn(
										'w-full rounded-lg px-3 py-2 transition-colors',
										isActiveSection(s.id) || isActive
											? 'bg-brand-400/15 text-brand-300 ring-1 ring-brand-400/30'
											: 'hover:bg-brand-400/10 hover:text-brand-300',
									)
								}
							>
								{s.name}
							</NavLink>
						))}
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
		</div>
	)
}

/* Logo: scrolls to #home if already on the page */
function LogoLink() {
	return (
		<NavLink
			to={{ pathname: '/', hash: '#home' }}
			className="relative z-20 mr-4 flex items-center gap-2 px-2 py-1 text-sm"
		>
			<img src={logo} alt="Taq'Balam" width={30} height={30} />
			<span className="font-cinzel text-text">Taq ' Balam</span>
		</NavLink>
	)
}

/* Desktop items: right-aligned with hover pill */
function DesktopItems({ isActiveSection }) {
	const [hovered, setHovered] = React.useState(null)
	const items = SECTIONS.map((s) => ({
		name: s.name,
		to: { pathname: '/', hash: `#${s.id}` },
		id: s.id,
	}))

	const linkBase = 'relative rounded-full px-4 py-2 transition-colors hover:text-brand-300'
	const activeCls = 'font-semibold text-brand-300'

	return (
		<nav
			onMouseLeave={() => setHovered(null)}
			className={cn(
				'ml-auto hidden items-center gap-2 text-sm lg:flex',
				'text-muted transition-colors hover:text-text',
			)}
		>
			{items.map((item, idx) => (
				<NavLink
					key={item.id}
					to={item.to}
					onMouseEnter={() => setHovered(idx)}
					className={() => cn(linkBase, isActiveSection(item.id) && activeCls)}
				>
					{hovered === idx && (
						<motion.div
							layoutId="hovered"
							className={`absolute inset-0 h-full w-full rounded-full bg-brand-400/15 ring-1
							ring-brand-400/30`}
						/>
					)}
					<span className="relative z-20">{item.name}</span>
				</NavLink>
			))}
		</nav>
	)
}
