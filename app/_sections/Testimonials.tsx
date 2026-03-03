import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-7xl grid grid-cols-3 gap-8">
        <article className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div>
            <Image
              src={"/profile-1.jpg"}
              alt="Satish"
              width={128}
              height={128}
            />
            <p>Satish Patel</p>
            <p>Founder & CEO, Huddle</p>
          </div>
        </article>

        <article className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div>
            <Image
              src={"/profile-2.jpg"}
              alt="Bruce"
              width={128}
              height={128}
            />
            <p>Bruce McKenzie</p>
            <p>Founder & CEO, Huddle</p>
          </div>
        </article>

        <article className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div>
            <Image src={"/profile-3.jpg"} alt="Iva" width={128} height={128} />
            <p>Iva Boyd</p>
            <p>Founder & CEO, Huddle</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
