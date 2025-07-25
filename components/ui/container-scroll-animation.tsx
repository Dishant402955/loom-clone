"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
	titleComponent,
	children,
}: {
	titleComponent?: string | React.ReactNode;
	children: React.ReactNode;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
	});
	const [isMobile, setIsMobile] = React.useState(false);

	React.useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	const scaleDimensions = () => {
		return isMobile ? [0.7, 0.9] : [0.5, 1];
	};

	const rotate = useTransform(scrollYProgress, [0, 1], [30, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
	const translate = useTransform(scrollYProgress, [0, 1], [0, 100]);

	return (
		<div
			className="h-[60rem] md:h-[80rem] flex items-center justify-center relative w-full translate-y-20"
			ref={containerRef}
		>
			<div
				className="py-10 md:py-10 w-full relative"
				style={{
					perspective: "300px",
				}}
			>
				<Header translate={translate} titleComponent={titleComponent} />
				<Card rotate={rotate} translate={translate} scale={scale}>
					{children}
				</Card>
			</div>
		</div>
	);
};

export const Header = ({
	translate,
	titleComponent,
}: {
	translate: MotionValue<number>;
	titleComponent: React.ReactNode;
}) => {
	return (
		<motion.div
			style={{
				translateY: translate,
			}}
			className="div max-w-5xl mx-auto text-center"
		>
			{titleComponent}
		</motion.div>
	);
};

export const Card = ({
	rotate,
	scale,
	children,
}: {
	rotate: MotionValue<number>;
	scale: MotionValue<number>;
	translate: MotionValue<number>;
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<motion.div
			style={{
				rotateX: rotate,
				scale,
				boxShadow:
					"0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
			}}
			className="max-w-[90%] -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl md:translate-y-60"
		>
			<div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
				{children}
			</div>
		</motion.div>
	);
};

export function Demo() {
	return (
		<div className="w-full h-fit flex justify-center items-center">
			<ContainerScroll
				titleComponent={
					<>
						<h1 className="text-4xl font-semibold text-white">
							Unleash the power of <br />
							<span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
								Scroll Animations
							</span>
						</h1>
					</>
				}
			>
				<div className="w-full h-full bg-accent flex justify-center items-center">
					This is Awesome
				</div>
			</ContainerScroll>
		</div>
	);
}
