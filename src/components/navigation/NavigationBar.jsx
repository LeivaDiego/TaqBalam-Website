// This component defines a responsive navigation bar with both desktop and mobile views.
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

/**
 * Navigation bar component for the application.
 * @returns {JSX.Element} The rendered navigation bar.
 */
export function NavigationBar() {
	// Define navigation items
	const navItems = [
		{ name: 'Home', to: '/' },
		{ name: 'Gallery', to: '/gallery' },
		{ name: 'Timeline', to: '/timeline' },
		{ name: 'Join', to: '/join' },
	]

	// State to manage mobile menu visibility
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	// Render the navigation bar
	return (
		<div className="relative w-full">
			<Navbar>
				{/* Desktop */}
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className="w-[80px]" />
				</NavBody>

				{/* Mobile */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>

					{/* Mobile navigation menu */}
					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
					>
						{navItems.map((item) => (
							<NavLink
								key={item.name}
								to={item.to}
								end={item.to === '/'}
								onClick={() => setIsMobileMenuOpen(false)}
								className={({ isActive }) =>
									[
										'w-full rounded-md px-3 py-2',
										isActive
											? 'bg-neutral-200 font-semibold dark:bg-neutral-800'
											: 'hover:bg-neutral-100 dark:hover:bg-neutral-900',
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
