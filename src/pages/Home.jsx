import React from 'react'
import { CircularGallery } from '@Components/CircularGallery'
import { SponsorsLoop } from '@Components/SponsorsLoop'
import { BackgroundGradient } from '@UI/background-gradient'
import { BlurText } from '@Components/BlurText'

export default function Home() {
	return (
		<div className="mx-auto max-w-6xl space-y-24 px-4 py-24">
			<section className="grid h-[70svh] place-items-center">
				<h1 className="text-5xl font-bold">Engineering Speed</h1>
			</section>

			<section id="about">
				<h2 className="text-3xl font-semibold">About Us</h2>
				<p className="mt-4 opacity-80">We’re the university’s Formula Student team…</p>
				<BackgroundGradient className="mt-8 rounded-3xl p-8">
					<p className="text-lg">We design and build high-performance race cars.</p>
				</BackgroundGradient>
			</section>

			<section id="sponsors" className="space-y-8">
				<h2 className="text-3xl font-semibold">Our Sponsors</h2>
				<SponsorsLoop />
			</section>

			<section id="gallery">
				<h2 className="text-3xl font-semibold">Gallery</h2>
				<div style={{ height: '600px', position: 'relative' }}>
					<CircularGallery bend={0.5} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
				</div>
			</section>

			<section id="Texts" className="space-y-8">
				<h2 className="text-3xl font-semibold">Texts</h2>
				<div className="space-y-4">
					<BlurText
						text="Blur Text Example"
						delay={150}
						animateBy="words"
						direction="top"
						className="mb-8 text-2xl"
					/>
				</div>
			</section>
		</div>
	)
}
