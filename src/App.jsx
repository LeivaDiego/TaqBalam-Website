import { NavigationBar } from '@Navigation/NavigationBar'
import { AuroraBackground } from '@UI/aurora-background'
import { ScrollToTop } from '@Navigation/ScrollToTop'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import History from './pages/History.jsx'

export default function App() {
	return (
		<AuroraBackground>
			<div className="relative z-10 min-h-screen text-neutral-100">
				<NavigationBar />
				<ScrollToTop routeBehavior="instant" hashBehavior="smooth" />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/historia" element={<History />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
				<footer className="bg-black/20 py-12 text-center opacity-90 backdrop-blur-sm">
					© Taq'Balam 2025. Todos los derechos reservados.
				</footer>
			</div>
		</AuroraBackground>
	)
}
