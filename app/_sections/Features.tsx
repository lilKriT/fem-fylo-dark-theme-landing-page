import Image from "next/image";

const Features = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-5xl grid grid-cols-2 gap-x-32 gap-y-24">
        <article className="features__article">
          <Image
            src={"/icon-access-anywhere.svg"}
            alt="Computer and tablet"
            width={83}
            height={78}
          />
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </article>
        <article className="features__article">
          <Image
            src={"/icon-security.svg"}
            alt="Shield"
            width={70}
            height={88}
          />
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </article>
        <article className="features__article">
          <Image
            src={"/icon-collaboration.svg"}
            alt="Clock"
            width={86}
            height={71}
          />
          <h2>Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </article>
        <article className="features__article">
          <Image
            src={"/icon-any-file.svg"}
            alt="Folders"
            width={91}
            height={64}
          />
          <h2>Store any type of file</h2>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Features;
