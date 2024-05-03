import { socials } from "@/libraries/constants/data";
import Image from "next/image";
import Link from "next/link";
import Github from "../../github";
import { SectionTitle } from "../../titles";

type Props = {
  withHeader?: boolean;
};

const Socials = ({ withHeader = false }: Props) => {
  return (
    <section id="socials" className="grid items-center justify-center gap-8">
      {withHeader && (
        <>
          <SectionTitle>
            Do you wish to work with <span className="bg-text">ME</span> ?
          </SectionTitle>
          <p className="max-w-4xl text-center -mt-4">
            I am available for freelance projects, part-time positions, and
            full-time roles. Feel free to reach out to me to discuss your
            project through any of the following platforms:
          </p>
        </>
      )}
      <div className="flex items-center mx-auto gap-1">
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
      </div>
    </section>
  );
};

export default Socials;
