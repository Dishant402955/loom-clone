import Link from "next/link";

export const Footer = () => {
	return (
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
	);
};
