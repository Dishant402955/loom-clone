import { ContainerScroll } from "@/components/container-scroll-animation";

export const DemoImage = () => {
	return (
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
	);
};
