import { Loader } from "@/components/loader";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
	return (
		<>
			<SignIn fallback={<Loader />} />
		</>
	);
};

export default SignInPage;
