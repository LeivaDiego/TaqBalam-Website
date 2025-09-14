// src/App.jsx
import { Suspense } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="font-semibold tracking-wide">
          Motorsport
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className="px-3 py-2 hover:opacity-80">
            Home
          </NavLink>
          <NavLink to="/gallery" className="px-3 py-2 hover:opacity-80">
            Gallery
          </NavLink>
          <NavLink to="/timeline" className="px-3 py-2 hover:opacity-80">
            Timeline
          </NavLink>
          <NavLink to="/join" className="px-3 py-2 hover:opacity-80">
            Join
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

function NotFound() {
  return <div className="p-8">Not found</div>
}

// TODO: Lazy load pages
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Timeline from './pages/Timeline.jsx'
import Join from './pages/Join.jsx'

export default function App() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100">
      <Nav />
      <main>
        <Suspense fallback={<div className="p-8">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/join" element={<Join />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <footer className="py-12 text-center opacity-60">© Motorsport Team</footer>
    </div>
  )
}
