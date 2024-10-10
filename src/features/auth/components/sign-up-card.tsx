import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const SignUpCard = () => {
  return (
    <Card className="h-full w-full border-none shadow-none md:w-[487px]">
      <CardHeader className="flex items-center justify-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
      </CardHeader>
      <CardDescription className="pl-7">
        By signing up, you agree to our{" "}
        <Link href="/privacy">
          <span className="text-blue-700">Privacy Policy</span>
        </Link>
        and{""}
        <Link href="/terms">
          <span className="text-blue-700">Term of Service</span>
        </Link>
      </CardDescription>
      <div className="px-7">
        <DottedSeparator className="py-3" />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="text"
            value={""}
            onChange={(e) => console.log(e.target.value)}
            placeholder="Enter your name"
            disabled={false}
          />
          <Input
            required
            type="email"
            value={""}
            onChange={(e) => console.log(e.target.value)}
            placeholder="Enter your email"
            disabled={false}
          />
          <Input
            required
            type="password"
            value={""}
            onChange={(e) => console.log(e.target.value)}
            placeholder="Password"
            disabled={false}
            min={8}
            max={256}
          />
          <Button disabled={false} size="lg" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="flex flex-col gap-y-4 p-7">
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={false}
        >
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={false}
        >
          <FaGithub className="mr-2 size-5" />
          Login with GitHub
        </Button>
      </CardContent>
    </Card>
  );
};
