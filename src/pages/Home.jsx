import React from 'react'
import { BackgroundGradient } from '@UI/background-gradient'
import { HoverBorderGradientDemo } from '@Navigation/buttondemo'

export default function Home() {
	return (
		<div className="mx-auto max-w-6xl space-y-24 px-4 py-24">
			<section className="grid h-[70svh] place-items-center">
				<h1 className="text-5xl font-bold">Engineering Speed</h1>
			</section>

			<section id="about">
				<h2 className="text-3xl font-semibold">About Us</h2>
				<p className="mt-4 opacity-80">We’re the university’s Formula Student team…</p>
			</section>
			<div className="place-items-left center flex">
				<BackgroundGradient
					className={'max-w-sm rounded-[22px] bg-white p-4 sm:p-10 dark:bg-zinc-900'}
				>
					<img
						src={`src/assets/images/image-placeholder.webp`}
						alt="placeholder image"
						height="400"
						width="400"
						className="object-contain"
					/>
					<p className={'mt-4 mb-2 text-base text-black sm:text-xl dark:text-neutral-200'}>
						Hero CARD
					</p>

					<p className="text-sm text-neutral-600 dark:text-neutral-400">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</p>
					<button
						className={`mt-4 flex items-center space-x-1 rounded-full bg-black py-1 pr-1 pl-4
							text-xs font-bold text-white dark:bg-zinc-800`}
					>
						<span>Button</span>
						<span className={'rounded-full bg-zinc-700 px-2 py-0 text-[0.6rem] text-white'}>
							Click
						</span>
					</button>
				</BackgroundGradient>
				<HoverBorderGradientDemo />
			</div>
		</div>
	)
}
