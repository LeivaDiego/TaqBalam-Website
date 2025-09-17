// pages/Timeline.jsx
import React from 'react'
import { Timeline } from '@UI/timeline'
import { Reveal } from '@UI/reveal'
import { BackgroundGradient } from '@UI/background-gradient'

// Imágenes por año (2 por año)
import y2013_1 from '@Images/Timeline/taq2013-1.webp'
import y2013_2 from '@Images/Timeline/taq2013-2.webp'
import y2014_1 from '@Images/Timeline/taq2014-1.webp'
import y2014_2 from '@Images/Timeline/taq2014-2.webp'
import y2015_1 from '@Images/Timeline/taq2015-1.webp'
import y2015_2 from '@Images/Timeline/taq2015-2.webp'
import y2016_1 from '@Images/Timeline/taq2016-1.webp'
import y2016_2 from '@Images/Timeline/taq2016-2.webp'
import y2017_1 from '@Images/Timeline/taq2017-1.webp'
import y2017_2 from '@Images/Timeline/taq2017-2.webp'
import y2018_1 from '@Images/Timeline/taq2018-1.webp'
import y2018_2 from '@Images/Timeline/taq2018-2.webp'
import y2019_1 from '@Images/Timeline/taq2019-1.webp'
import y2019_2 from '@Images/Timeline/taq2019-2.webp'
import y2020_1 from '@Images/Timeline/taq2020-1.webp'
import y2020_2 from '@Images/Timeline/taq2020-2.webp'
import y2021_1 from '@Images/Timeline/taq2021-1.webp'
import y2021_2 from '@Images/Timeline/taq2021-2.webp'
import y2024_1 from '@Images/Timeline/taq2024-1.webp'
import y2024_2 from '@Images/Timeline/taq2024-2.webp'
import y2025_1 from '@Images/Taq2025/Taq2025-1.webp'
import y2025_2 from '@Images/Taq2025/Taq2025-2.webp'

const tileCls =
	'h-24 w-full rounded-lg object-cover ' +
	'shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),' +
	'_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset] ' +
	'md:h-44 lg:h-60'

function YearBlock({ text, images }) {
	return (
		<div>
			{/* was: text-xs md:text-sm */}
			<p
				className={`mb-6 text-sm leading-relaxed text-[color:var(--color-text)] opacity-90
					md:text-base`}
				style={{ textAlign: 'justify' }}
			>
				{text}
			</p>
			<div className="grid grid-cols-2 gap-4">
				{images.map((src, i) => (
					<img key={i} src={src} alt="timeline" width={500} height={500} className={tileCls} />
				))}
			</div>
		</div>
	)
}

export function History() {
	const data = [
		{
			title: '2013',
			content: (
				<YearBlock
					text="Primera participación en Shell Eco-marathon (Houston). Gran aprendizaje y conexión con equipos del continente. Premio Perseverance in the Face of Adversity."
					images={[y2013_1, y2013_2]}
				/>
			),
		},
		{
			title: '2014',
			content: (
				<YearBlock
					text="Segundo año. Huracán mejora su aerodinámica. Viajan 11 integrantes a Houston. Problemas técnicos impiden terminar, pero dejan lecciones clave."
					images={[y2014_1, y2014_2]}
				/>
			),
		},
		{
			title: '2015',
			content: (
				<YearBlock
					text="Tercer año. Sede Detroit. Nuevos retos, amistades y experiencia para el equipo, con la motivación de volver más fuertes."
					images={[y2015_1, y2015_2]}
				/>
			),
		},
		{
			title: '2016',
			content: (
				<YearBlock
					text="Cuarto año. Detroit nuevamente. Rediseño de Huracán para ser más ligero. Aprendizaje en materiales, transmisión, frenos y llantas."
					images={[y2016_1, y2016_2]}
				/>
			),
		},
		{
			title: '2017',
			content: (
				<YearBlock
					text="Quinto año y último en Detroit. Equipo renovado, competencia exigente y orgullo de representar a Guatemala."
					images={[y2017_1, y2017_2]}
				/>
			),
		},
		{
			title: '2018',
			content: (
				<YearBlock
					text="Sexto año. Sonoma, nuevo chasis y metas altas. Actividades con colegios en Sololá. Un fallo de batería impide terminar, pero el equipo recibe el 'Perseverance & Spirit of the Event Award'."
					images={[y2018_1, y2018_2]}
				/>
			),
		},
		{
			title: '2019',
			content: (
				<YearBlock
					text="Séptimo año. Sonoma. Enfoque en máxima eficiencia de Huracán y superación de inspecciones técnicas."
					images={[y2019_1, y2019_2]}
				/>
			),
		},
		{
			title: '2020',
			content: (
				<YearBlock
					text="Octavo año. La pandemia cancela lo presencial. Participación remota con mención honorífica en comunicación y 'Spirit of Shell Eco-marathon'."
					images={[y2020_1, y2020_2]}
				/>
			),
		},
		{
			title: '2021',
			content: (
				<YearBlock
					text="Noveno año. Modalidad híbrida y 'Virtual Off-Track Awards'. Nuevo taller Taq'Balam y trabajo en mejoras de Huracán y Rayo Chapín."
					images={[y2021_1, y2021_2]}
				/>
			),
		},
		{
			title: '2024',
			content: (
				<YearBlock
					text="Participación en Shell Eco-marathon 2024. Agradecimiento especial a UNO Guatemala por su apoyo. Objetivo: volver más fuertes."
					images={[y2024_1, y2024_2]}
				/>
			),
		},
		{
			title: '2025',
			content: (
				<YearBlock
					text="Único equipo centroamericano rumbo a 2025. Camino al Jaguar 2 para 2026. Con apoyo de AMEGUA se incorporan compuestos como fibra de carbono y policarbonato para un diseño más ligero y eficiente."
					images={[y2025_1, y2025_2]}
				/>
			),
		},
	]

	return (
		<section id="historia" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
			<div className="mb-8 sm:mb-12">
				<Reveal dir="up" blur={10}>
					<h2
						className={`text-4xl font-semibold tracking-tight text-[color:var(--color-brand-50)]
							sm:text-5xl`}
					>
						Nuestra Historia
					</h2>
				</Reveal>
				<Reveal dir="up" blur={10} amount={0.3}>
					<p className="mt-5 text-[clamp(1.05rem,1.25vw+0.95rem,1.4rem)] leading-relaxed">
						Más de una década de aprendizaje, ingeniería y perseverancia.
					</p>
					<p className="mt-2 max-w-3xl text-[clamp(1.05rem,1.2vw+0.9rem,1.35rem)] opacity-90">
						Desliza para conocer la historia de Taq’Balam. Descubre a las generaciones de Huracán a
						lo largo de nuestra participación en Shell Eco-marathon Americas.
					</p>
				</Reveal>
			</div>

			<div className="relative w-full overflow-visible">
				<BackgroundGradient className="bg-bg p-1 sm:p-10">
					<Timeline data={data} />
				</BackgroundGradient>
			</div>
		</section>
	)
}
