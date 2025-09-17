// components/AboutSection.jsx
import React from 'react'
import { Sparkles, Leaf } from 'lucide-react'
import { HoverBorderGradient } from '@UI/hover-border-gradient'
import { GradientCard } from '@Widgets/GradientCard'
import videoSrc from '@/assets/videos/TaqBalam2025 Video.mp4'
import videoPoster from '@/assets/images/TaqBalam-Logo-Color.svg'

export function About() {
	return (
		<section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
			<div className="grid grid-cols-12 items-stretch gap-8">
				{/* Columna izquierda: título/texto arriba + stack abajo */}
				<div className="col-span-12 flex h-full flex-col justify-between md:col-span-6">
					{/* Parte superior */}
					<div className="space-y-4">
						<h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Nosotros</h2>
						<p
							className="text-lg leading-relaxed opacity-90 sm:text-xl"
							style={{ textAlign: 'justify' }}
						>
							<strong>Taq’Balam</strong> es un proyecto de la UVG que desarrolla un prototipo
							eléctrico para investigación y sostenibilidad. Desde 2010, con apoyo del Instituto de
							Investigaciones y Química UVG, representamos a Guatemala como el único equipo
							centroamericano en competencias internacionales, demostrando que la movilidad
							eléctrica puede impulsar un futuro sostenible en la región.
						</p>
					</div>

					{/* Parte inferior: stack Misión y Visión */}
					<div className="mt-8 grid grid-cols-1 gap-4">
						<InfoCard
							icon={<Sparkles className="size-6 shrink-0 text-[color:var(--color-brand-300)]" />}
							title="Misión"
							titleClass="text-[color:var(--color-brand-200)]"
							text="Ser un equipo competitivo, organizado y multidisciplinario que impulse la innovación en movilidad eléctrica y genere impacto positivo en la sociedad."
						/>
						<InfoCard
							icon={<Leaf className="size-6 shrink-0 text-[color:var(--color-brand-300)]" />}
							title="Visión"
							titleClass="text-[color:var(--color-brand-200)]"
							text="Consolidarnos como referente en Latinoamérica por prototipos eléctricos eficientes, modernos y sostenibles que contribuyan al bienestar social y ambiental."
						/>
					</div>
				</div>

				{/* Columna derecha: video */}
				<div className="col-span-12 flex md:col-span-6">
					<GradientCard borderWidth={4} padding="p-4 sm:p-6" className="h-full w-full">
						<div className="flex h-full w-full overflow-hidden rounded-xl">
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
					</GradientCard>
				</div>
			</div>
		</section>
	)
}

function InfoCard({ icon, title, text, titleClass = '' }) {
	return (
		<HoverBorderGradient
			as="div"
			duration={1.2}
			containerClassName="rounded-2xl w-full"
			className="flex flex-col !bg-white/5 !px-6 !py-6 backdrop-blur-sm md:!p-8"
		>
			<div className="flex items-start gap-3">
				{icon}
				<div>
					<h3 className={`text-lg leading-tight font-semibold sm:text-xl ${titleClass}`}>
						{title}
					</h3>
					<p className="mt-2 text-base opacity-90 sm:text-lg">{text}</p>
				</div>
			</div>
		</HoverBorderGradient>
	)
}
