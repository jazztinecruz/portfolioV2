import { socials } from "@/libraries/constants/data";
import Image from "next/image";
import Link from "next/link";
import Github from "../../github";

const Socials = () => {
  return (
    <section id="socials" className="flex items-center gap-1">
      {socials.map((contact) => (
        <Link key={contact.src} href={contact.link}>
          <div className="relative w-fit">
            <Image
              key={contact.src}
              src={contact.src}
              alt={contact.src}
              width={30}
              height={30}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </Link>
      ))}
      <Github url="https://github.com/jazztinecruz" />
      <Link href="mailto: me@jazztinecruz.com" className="btn">
        Email ME
      </Link>
    </section>
  );
};

export default Socials;
