import { contacts } from "@/libraries/constants/data";
import Image from "next/image";
import Link from "next/link";

const Contacts = () => {
  return (
    <div className="flex items-center gap-3">
      {contacts.map((contact) => (
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
    </div>
  );
};

export default Contacts;
