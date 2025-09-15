import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavigationBar } from '@Navigation/NavigationBar'
import { BackgroundGradientAnimation } from '@UI/background-gradient-animation'

import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Timeline from './pages/Timeline.jsx'
import Join from './pages/Join.jsx'

export default function App() {
    return (
        <BackgroundGradientAnimation>
            <div className="min-h-dvh text-neutral-100">
                <NavigationBar />
                <main>
                    <Suspense fallback={<div className="p-8">Loading…</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/timeline" element={<Timeline />} />
                            <Route path="/join" element={<Join />} />
                        </Routes>
                    </Suspense>
                </main>
                <footer className="py-12 text-center opacity-60">© Motorsport Team</footer>
            </div>
        </BackgroundGradientAnimation>
    )
}
