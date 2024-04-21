import { socials } from "@/libraries/constants/data";
import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <section id="socials" className="flex items-center gap-3">
      {socials.map((contact) => (
        <Link key={contact.src} href={contact.link}>
          <div className="relative w-fit">
            <Image
              key={contact.src}
              src={contact.src}
              alt={contact.src}
              width={30}
              height={30}
            />
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Socials;
