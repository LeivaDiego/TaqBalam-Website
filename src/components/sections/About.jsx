// sections/About.jsx
import React from 'react'
import { Sparkles, Leaf } from 'lucide-react'
import { BackgroundGradient } from '@UI/background-gradient'
import { InfoCard } from '@Widgets/InfoCard'
import { Reveal } from '@UI/reveal'
import videoSrc from '@Videos/TaqBalam2025 Video.mp4'
import videoPoster from '@Images/TaqBalam-Logo-Color.svg'

export function About() {
	return (
		<section
			id="about"
			className={`mx-auto max-w-7xl overflow-visible px-4 py-16 sm:py-20
				[@media(orientation:portrait)]:overflow-hidden`}
		>
			<div className="grid grid-cols-12 items-stretch gap-8">
				{/* Left column */}
				<div className="col-span-12 flex h-full flex-col justify-between md:col-span-6">
					<div className="space-y-4">
						<Reveal dir="up" once={false}>
							<h2
								className={`text-4xl font-semibold tracking-tight text-[color:var(--color-brand-50)]
									sm:text-5xl`}
							>
								Nosotros
							</h2>
						</Reveal>

						<Reveal dir="up" once={false}>
							<p
								className={`text-lg leading-relaxed text-[color:var(--color-text)] opacity-90
									sm:text-xl`}
								style={{ textAlign: 'justify' }}
							>
								<strong>Taq'Balam</strong> es un proyecto de la UVG que desarrolla un prototipo
								eléctrico para investigación y sostenibilidad. Desde 2010, con apoyo del Instituto
								de Investigaciones y Química UVG, representamos a Guatemala como el único equipo
								centroamericano en competencias internacionales, demostrando que la movilidad
								eléctrica puede impulsar un futuro sostenible en la región.
							</p>
						</Reveal>
					</div>

					<div className="mt-8 grid grid-cols-1 gap-4">
						<Reveal dir="left" once={false} amount={0.3}>
							<InfoCard
								icon={<Sparkles className="size-6 shrink-0 text-[color:var(--color-brand-300)]" />}
								title="Misión"
								titleClass="text-[color:var(--color-brand-200)]"
								text="Ser un equipo competitivo, organizado y multidisciplinario que impulse la innovación en movilidad eléctrica y genere impacto positivo en la sociedad."
							/>
						</Reveal>

						<Reveal dir="left" once={false} amount={0.3}>
							<InfoCard
								icon={<Leaf className="size-6 shrink-0 text-[color:var(--color-brand-300)]" />}
								title="Visión"
								titleClass="text-[color:var(--color-brand-200)]"
								text="Consolidarnos como referente en Latinoamérica por prototipos eléctricos eficientes, modernos y sostenibles que contribuyan al bienestar social y ambiental."
							/>
						</Reveal>
					</div>
				</div>

				{/* Right column: video */}
				<div className="col-span-12 flex md:col-span-6">
					<Reveal dir="right" once={false} clip={false}>
						<BackgroundGradient className="bg-bg p-4 sm:p-10">
							<div className="flex h-full w-full overflow-visible rounded-xl">
								<video
									className="h-auto max-h-full w-full self-end rounded-xl"
									src={videoSrc}
									poster={videoPoster}
									autoPlay
									muted
									loop
									playsInline
									preload="auto"
								/>
							</div>
						</BackgroundGradient>
					</Reveal>
				</div>
			</div>
		</section>
	)
}
