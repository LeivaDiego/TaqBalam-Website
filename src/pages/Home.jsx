import React from 'react'
import { Hero } from '@Sections/Hero'
import { Sponsors } from '@Sections/Sponsors'
import { About } from '@Sections/About'

export default function Home() {
	return (
		<div className="w-full">
			<Hero />
			<About />
			<Sponsors />
		</div>
	)
}
