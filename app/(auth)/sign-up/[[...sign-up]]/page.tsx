"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Loader } from "@/components/loader";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SignUpPage() {
	return (
		<div className="grid w-full grow items-center px-4 sm:justify-center">
			<SignUp.Root>
				<Clerk.Loading>
					{(isGlobalLoading) => (
						<>
							<SignUp.Step name="start">
								<Card className="w-full sm:w-96">
									<CardHeader className="text-center">
										<CardTitle>Create your account</CardTitle>
										<CardDescription>
											Welcome! Choose one of these to get started.
										</CardDescription>
									</CardHeader>
									<CardContent className="">
										<div className="flex flex-col justify-center items-center w-full px-4 gap-y-1">
											<Clerk.Connection
												name="github"
												asChild
												className="w-full cursor-pointer"
											>
												<Button
													size="lg"
													variant="outline"
													type="button"
													disabled={isGlobalLoading}
												>
													<Clerk.Loading scope="provider:github">
														{(isLoading) =>
															isLoading ? (
																<Loader />
															) : (
																<>
																	<FaGithub className="mr-2 size-4" />
																	GitHub
																</>
															)
														}
													</Clerk.Loading>
												</Button>
											</Clerk.Connection>
											<Clerk.Connection
												name="google"
												asChild
												className="w-full cursor-pointer"
											>
												<Button
													size="lg"
													variant="outline"
													type="button"
													disabled={isGlobalLoading}
												>
													<Clerk.Loading scope="provider:google">
														{(isLoading) =>
															isLoading ? (
																<Loader />
															) : (
																<>
																	<FaGoogle className="mr-2 size-4" />
																	Google
																</>
															)
														}
													</Clerk.Loading>
												</Button>
											</Clerk.Connection>
										</div>
									</CardContent>
									<CardFooter>
										<div className="grid w-full gap-y-4">
											<Button variant="link" size="sm" asChild>
												<Clerk.Link navigate="sign-in">
													Already have an account? Sign in
												</Clerk.Link>
											</Button>
										</div>
									</CardFooter>
								</Card>
							</SignUp.Step>
						</>
					)}
				</Clerk.Loading>
			</SignUp.Root>
		</div>
	);
}
