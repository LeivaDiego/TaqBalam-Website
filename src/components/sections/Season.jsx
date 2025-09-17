// sections/Season.jsx
import React from 'react'
import { Layers, Wind, FlaskConical, Cpu } from 'lucide-react'
import { BackgroundGradient } from '@UI/background-gradient'
import { InfoCard } from '@Widgets/InfoCard'
import { Reveal } from '@UI/reveal'
import seasonVideo from '@Videos/TaqSeason25.mp4'

export function Season() {
	return (
		<section id="season" className="mx-auto max-w-7xl overflow-visible px-4 py-12 sm:py-16">
			<div className="grid grid-cols-12 items-stretch gap-6 sm:gap-8">
				{/* Text first on mobile, right on desktop */}
				<div className="relative z-10 order-1 col-span-12 md:order-2 md:col-span-6">
					<div className="space-y-4">
						<Reveal dir="up" blur={10}>
							<h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Temporada 2025</h2>
						</Reveal>

						<Reveal dir="up" blur={10}>
							<p
								className="text-lg leading-relaxed opacity-90 sm:text-xl"
								style={{ textAlign: 'justify' }}
							>
								Presentaremos un vehículo renovado con mejoras en materiales, aerodinámica y
								tecnologías propias. También proyectamos un prototipo urbano con hidrógeno verde.
								Próximo reto: abril 2026 en la Shell Eco-Marathon Americas.
							</p>
						</Reveal>
					</div>

					{/* 1x4 → 2x2 */}
					<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
						<Reveal dir="right" amount={0.3} blur={8}>
							<InfoCard
								dense
								icon={<Layers className="size-6 shrink-0 text-[color:var(--color-brand-300)]" />}
								title="Materiales ultraligeros"
								titleClass="text-[color:var(--color-brand-200)]"
								text="Rediseño del monocasco."
							/>
						</Reveal>
						<Reveal dir="right" amount={0.3} blur={8}>
							<InfoCard
								dense
								icon={<Wind className="size-6 shrink-0 text-[color:var(--color-brand-300)]" />}
								title="Aerodinámica"
								titleClass="text-[color:var(--color-brand-200)]"
								text="Más eficiencia y rendimiento."
							/>
						</Reveal>
						<Reveal dir="right" amount={0.3} blur={8}>
							<InfoCard
								dense
								icon={
									<FlaskConical className="size-6 shrink-0 text-[color:var(--color-brand-300)]" />
								}
								title="Hidrógeno verde"
								titleClass="text-[color:var(--color-brand-200)]"
								text="Prototipo urbano en desarrollo."
							/>
						</Reveal>
						<Reveal dir="right" amount={0.3} blur={8}>
							<InfoCard
								dense
								icon={<Cpu className="size-6 shrink-0 text-[color:var(--color-brand-300)]" />}
								title="Tecnologías propias"
								titleClass="text-[color:var(--color-brand-200)]"
								text="Diseño y validación in-house."
							/>
						</Reveal>
					</div>
				</div>

				{/* Video second on mobile, left on desktop */}
				<div className="relative z-0 order-2 col-span-12 overflow-visible md:order-1 md:col-span-6">
					<Reveal dir="left" blur={10} clip={false} className="overflow-visible">
						<BackgroundGradient
							containerClassName="overflow-visible"
							className="rounded-[22px] bg-bg p-3 sm:p-5"
						>
							<div className="overflow-hidden rounded-xl">
								<video
									className="h-auto w-full rounded-xl"
									src={seasonVideo}
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
