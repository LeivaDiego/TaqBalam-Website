import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavigationBar } from '@Navigation/NavigationBar'
import { AuroraBackground } from '@UI/aurora-background'
import { motion } from 'motion/react'

import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Timeline from './pages/Timeline.jsx'
import Join from './pages/Join.jsx'

export default function App() {
	return (
		<AuroraBackground>
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}
			>
				<div className="relative z-10 min-h-dvh text-neutral-100">
					<NavigationBar />
					<main>
						<Suspense
							fallback={<div className="p-8">Loading…</div>}
						>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/gallery" element={<Gallery />} />
								<Route
									path="/timeline"
									element={<Timeline />}
								/>
								<Route path="/join" element={<Join />} />
							</Routes>
						</Suspense>
					</main>
					<footer
						className={`bg-black/20 py-12 text-center opacity-80
							backdrop-blur-sm`}
					>
						© Motorsport Team
					</footer>
				</div>
			</motion.div>
		</AuroraBackground>
	)
}
