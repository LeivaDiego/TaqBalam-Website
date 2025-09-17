import { useEffect } from 'react'
import { NavigationBar } from '@Navigation/NavigationBar'
import { AuroraBackground } from '@UI/aurora-background'
import Home from './pages/Home.jsx'

export default function App() {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
	}, [])

	return (
		<AuroraBackground>
			<div className="relative z-10 min-h-screen text-neutral-100">
				<NavigationBar />
				<main>
					<Home />
				</main>
				<footer className="bg-black/20 py-12 text-center opacity-90 backdrop-blur-sm">
					© Taq'Balam 2025. Todos los derechos reservados.
				</footer>
			</div>
		</AuroraBackground>
	)
}
