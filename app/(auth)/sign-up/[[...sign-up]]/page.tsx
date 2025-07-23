import { Loader } from "@/components/loader";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
	return (
		<>
			<SignUp fallback={<Loader />} />
		</>
	);
};

export default SignUpPage;
