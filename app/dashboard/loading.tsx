import { Loader } from "@/components/loader";

const Loading = () => {
	return (
		<div className="h-full w-full flex justify-center items-center flex-col gap-y-1">
			<Loader />
			<h2>Redirecting ...</h2>
		</div>
	);
};

export default Loading;
