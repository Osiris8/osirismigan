import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold">Starting Build Anythings</h1>
          <p className="py-6 text-xl">
            Hi, I will happy to work with you. L&#39;ets build your next project
            !
          </p>
          <Link
            href={"mailto:miganosiris8@gmail.com"}
            className="btn btn-primary"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
