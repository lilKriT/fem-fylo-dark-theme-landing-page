import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-dvh flex justify-center items-center px-8 py-48 bg-navy-850 bg-[url(/bg-curvy-desktop.svg)] bg-no-repeat bg-bottom bg-contain">
      <div className="flex flex-col justify-center items-center gap-8 max-w-3xl text-center">
        <Image
          src={"/illustration-intro.png"}
          alt="Hero Image"
          width={720}
          height={534}
          className="w-full"
        />
        <h1 className="text-4xl font-bold leading-[1.25]">
          All your files in one secure location, accessible anywhere.
        </h1>

        <p className="mt-4 max-w-[50ch]">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>

        <Link href={"/#"} className="btn">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
