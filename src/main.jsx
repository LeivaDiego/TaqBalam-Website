import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// 1) Disable browser auto-restore
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

// 2) On hard reload, strip any hash so we land on the hero
const nav = performance.getEntriesByType?.('navigation')?.[0]
if (nav?.type === 'reload' && window.location.hash) {
	history.replaceState(null, '', window.location.pathname + window.location.search)
}

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
)
