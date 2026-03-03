import Image from "next/image";
import Link from "next/link";

const StayProductive = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="w-full grid grid-cols-2">
        {/* Picture */}
        <div className="bg-[url(/illustration-stay-productive.png)] bg-contain bg-size-[80%] bg-no-repeat bg-center aspect-615/465"></div>

        <div className="flex flex-col justify-center items-start gap-8">
          <h2 className="text-4xl font-bold">
            Stay productive, <br />
            wherever you are
          </h2>
          <p className="max-w-prose">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="max-w-prose">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <Link
            href={"/#"}
            className="text-teal-200 flex justify-start items-center gap-4 border-b border-teal-200 pb-2"
          >
            <span>See how Fylo works</span>
            <Image
              src={"/icon-arrow.svg"}
              alt="Arrow"
              width={16}
              height={16}
              className="h-6 w-auto mt-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
