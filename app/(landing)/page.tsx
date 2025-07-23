"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { ContainerScroll } from "@/components/container-scroll-animation";
import {
	HoverEffect,
	CardTitle,
	CardDescription,
} from "@/components/card-hover-effect";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { LampContainer } from "@/components/lamp-effect";
import SpotlightCard from "@/components/spotlight-card";

const LandingPage = () => {
	const featureCards = [
		{
			title: "Instant Recording",
			description:
				"Start recording your screen with a single click. No setup, no delay.",
		},
		{
			title: "Instant Share",
			description:
				"Generate a link immediately after recording. Share without downloads.",
		},
		{
			title: "High-Quality Output",
			description: "Crystal-clear video and audio, optimized for clarity.",
		},
		{
			title: "Privacy Focused",
			description:
				"Your recordings are private by default. You decide who sees them.",
		},
		{
			title: "Lightweight",
			description:
				"No bloated apps. Just a fast, responsive experience built for the web.",
		},
		{
			title: "Collaborate Effortlessly",
			description: "Comment, react, and discuss recordings in clicks.",
		},
	];

	return (
		<main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-start">
			{/* Navbar */}
			<nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-background/60 border-b border-border shadow-sm">
				<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<img src="/logo.svg" alt="logo" className="h-7 w-7" />
						<span className="text-xl font-semibold tracking-wide">boom</span>
					</div>
					<Link
						href="/dashboard"
						className="px-4 py-2 bg-primary text-background font-medium rounded-md hover:opacity-90 transition"
					>
						Dashboard →
					</Link>
				</div>
			</nav>

			{/* Hero */}
			<LampContainer className="bg-background text-foreground">
				<motion.h1
					initial={{ opacity: 0, y: 150 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					className="mt-8 bg-gradient-to-br from-slate-200 to-slate-400 py-4 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-7xl"
				>
					Capture. Share. <br /> In one click.
				</motion.h1>
			</LampContainer>

			{/* Typewriter CTA */}
			<section className="mt-16 w-full max-w-4xl px-4 text-center">
				<TypewriterEffect
					words={[
						{ text: "Record" },
						{ text: "anything," },
						{ text: "anytime," },
						{ text: "anywhere.", className: "text-blue-500" },
					]}
				/>
				<p className="mt-4 text-muted-foreground text-base md:text-lg">
					Whether it's a bug report, product demo, or onboarding — we've got you
					covered.
				</p>
			</section>

			{/* Text Explanation */}
			<section className="mt-20 max-w-3xl px-6">
				<TextGenerateEffect
					words="Boom lets you skip the unnecessary steps — just record, share, and move forward. No installs. No clutter. Just speed and clarity."
					className="text-center text-lg md:text-xl"
					duration={0.6}
				/>
			</section>

			{/* Scroll Animation Preview */}
			<section className="mt-32 w-full">
				<ContainerScroll
					titleComponent={
						<>
							<h2 className="text-3xl md:text-5xl font-bold text-center text-white">
								See Boom in action
							</h2>
							<p className="text-muted-foreground text-center mt-4 text-base md:text-lg">
								A smooth and modern tool designed to make screen recording
								effortless.
							</p>
						</>
					}
				>
					<img
						src="/mock.jpg"
						alt="App mockup"
						className="h-full w-full object-cover rounded-2xl"
					/>
				</ContainerScroll>
			</section>

			{/* Features Grid */}
			<section className="mt-24 max-w-6xl px-4 w-full">
				<h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-white">
					Why Boom?
				</h2>
				<HoverEffect
					items={featureCards.map((feature, index) => (
						<SpotlightCard className="size-full">
							<CardTitle>{feature.title}</CardTitle>
							<CardDescription>{feature.description}</CardDescription>
						</SpotlightCard>
					))}
				/>
			</section>

			{/* Footer CTA (optional) */}
			<section className="mt-28 mb-20 text-center">
				<h3 className="text-2xl font-semibold text-white">
					Ready to get started?
				</h3>
				<p className="text-muted-foreground mt-2">
					Join thousands using Boom to record smarter, not harder.
				</p>
				<div className="mt-6 flex justify-center space-x-4">
					<Link href="/signup">
						<button className="px-6 py-2 rounded-md bg-primary text-background font-medium hover:opacity-90 transition">
							Sign Up Free
						</button>
					</Link>
					<Link href="/learn-more">
						<button className="px-6 py-2 rounded-md border border-border text-foreground font-medium hover:bg-border/10 transition">
							Learn More
						</button>
					</Link>
				</div>
			</section>
		</main>
	);
};

export default LandingPage;
