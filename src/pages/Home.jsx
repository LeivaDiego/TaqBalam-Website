import React from 'react'
import { Hero } from '@Sections/Hero'
import { Sponsors } from '@Sections/Sponsors'
import { About } from '@Sections/About'
import { Season } from '@Sections/Season'
import { Gallery } from '@Sections/Gallery'
import { JoinUs } from '@Sections/JoinUs'
import { Contact } from '@Sections/Contact'

export default function Home() {
	return (
		<div className="w-full">
			<Hero />
			<About />
			<Sponsors />
			<Season />
			<Gallery />
			<JoinUs />
			<Contact />
		</div>
	)
}
