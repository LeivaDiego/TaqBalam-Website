import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from '@UI/resizable-navbar'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function NavigationBar() {
	const navItems = [
		{ name: 'Home', to: '/' },
		{ name: 'Gallery', to: '/gallery' },
		{ name: 'Timeline', to: '/timeline' },
		{ name: 'Join', to: '/join' },
	]
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	return (
		<div className="relative w-full">
			<Navbar>
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className="w-[80px]" />
				</NavBody>
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>
					<MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
						{navItems.map((item) => (
							<NavLink
								key={item.name}
								to={item.to}
								end={item.to === '/'}
								onClick={() => setIsMobileMenuOpen(false)}
								className={({ isActive }) =>
									[
										'w-full rounded-lg px-3 py-2 transition-colors',
										isActive
											? 'bg-brand-400/15 text-brand-300 ring-1 ring-brand-400/30'
											: 'hover:bg-brand-400/10 hover:text-brand-300',
									].join(' ')
								}
							>
								{item.name}
							</NavLink>
						))}
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
		</div>
	)
}
