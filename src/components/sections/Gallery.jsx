import React, { useMemo } from 'react'
import { CircularGallery } from '@Widgets/CircularGallery'
import { Reveal } from '@UI/reveal'

export function Gallery() {
	const items = useMemo(() => {
		const mods = import.meta.glob('@Images/Taq2025/Taq2025-*.webp', { eager: true, as: 'url' })
		return Object.entries(mods)
			.sort(
				(a, b) =>
					Number(a[0].match(/(\d+)\.webp$/)?.[1] ?? 0) -
					Number(b[0].match(/(\d+)\.webp$/)?.[1] ?? 0),
			)
			.map(([, url]) => ({ image: url }))
	}, [])

	const bend = typeof window !== 'undefined' && window.innerWidth < 640 ? 1.2 : 2.6

	return (
		<section id="gallery" className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
			<Reveal dir="up" blur={10}>
				<h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Galería</h2>
			</Reveal>

			<Reveal dir="up" blur={10}>
				<div className="mt-3 h-[60svh] sm:h-[70svh] md:h-[72svh]">
					<CircularGallery
						items={items}
						bend={bend}
						textColor="#ffffff"
						borderRadius={0.06}
						scrollSpeed={2}
						scrollEase={0.06}
						showLabels={false}
					/>
				</div>
			</Reveal>
		</section>
	)
}
