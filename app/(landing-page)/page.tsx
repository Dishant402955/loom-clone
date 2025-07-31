import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { Monitor, Video, Share2 } from "lucide-react";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col w-full">
			<header className="sticky top-0 z-50 backdrop-blur-md bg-background/50 border-b border-border h-16">
				<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
					<Logo />
					<Link href="/dashboard">
						<Button
							variant="outline"
							className="relative border border-primary text-primary font-medium px-4 py-2 rounded-lg shadow hover:brightness-110 transition"
						>
							<span className="absolute inset-0 animate-pulse border border-primary opacity-20 rounded-lg blur-sm" />
							<span className="relative z-10">Dashboard</span>
						</Button>
					</Link>
				</div>
			</header>

			{/* Hero Section */}
			<main className="flex-1 flex flex-col items-center justify-center text-center px-6 mt-40">
				<h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
					Capture, Share, and Communicate
					<br />
					with <span className="text-primary">Boom</span>
				</h1>
				<p className="mt-6 text-lg text-muted-foreground max-w-xl">
					A modern, minimal, and fast screen recording experience. No clutter,
					just clicks.
				</p>
				<div className="mt-8 flex gap-4 flex-wrap justify-center">
					<Link href="/dashboard">
						<Button size="lg">Start Recording</Button>
					</Link>
					<Button variant="outline" size="lg">
						Download Desktop App
					</Button>
				</div>
			</main>

			{/* Features Section */}
			<section className="w-full bg-card py-20 border-t border-border">
				<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
					<Feature
						icon={<Monitor className="w-8 h-8 text-primary" />}
						title="Screen + Cam"
						desc="Record your screen, camera, or both at once with a single click."
					/>
					<Feature
						icon={<Share2 className="w-8 h-8 text-primary" />}
						title="Instant Sharing"
						desc="Get a shareable link right after recording. No rendering delays."
					/>
					<Feature
						icon={<Video className="w-8 h-8 text-primary" />}
						title="Clean Playback"
						desc="Fast, smooth playback with timeline scrubbing and controls."
					/>
				</div>
			</section>

			{/* Footer */}
			<footer className="w-full border-t border-border py-6 text-center text-sm text-muted-foreground">
				© {new Date().getFullYear()} Boom — Built with love and caffeine
			</footer>
		</div>
	);
}

function Feature({
	icon,
	title,
	desc,
}: {
	icon: React.ReactNode;
	title: string;
	desc: string;
}) {
	return (
		<div className="flex flex-col items-center space-y-4 px-2">
			{icon}
			<h3 className="text-xl font-semibold">{title}</h3>
			<p className="text-sm text-muted-foreground">{desc}</p>
		</div>
	);
}
