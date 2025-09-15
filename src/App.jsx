// Main application component with routing and navigation.
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavigationBar } from '@Navigation/NavigationBar'
import { AuroraBackground } from '@UI/aurora-background'
import { motion } from 'motion/react'
import ScrollToTop from '@Navigation/ScrollToTop'

// Page components
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Timeline from './pages/Timeline.jsx'
import Join from './pages/Join.jsx'

export default function App() {
	return (
		// Aurora background wrapper for visual effect.
		<AuroraBackground>
			<ScrollToTop behavior="auto" />
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}
			>
				{/* Main content area with navigation and footer. */}
				<div className="relative z-10 min-h-screen text-neutral-100">
					{/* Navigation bar at the top of the page. */}
					<NavigationBar />
					<main>
						{/* Suspense for lazy loading routes with a fallback loader. */}
						<Suspense fallback={<div className="p-8">Loading…</div>}>
							{/* Define application routes. */}
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/gallery" element={<Gallery />} />
								<Route path="/timeline" element={<Timeline />} />
								<Route path="/join" element={<Join />} />
							</Routes>
						</Suspense>
					</main>
					{/* Footer section at the bottom of the page. */}
					<footer className={'bg-black/20 py-12 text-center opacity-80 backdrop-blur-sm'}>
						© Motorsport Team
					</footer>
				</div>
			</motion.div>
		</AuroraBackground>
	)
}
