// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
window.addEventListener('pageshow', () => {
	if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
})

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
)
