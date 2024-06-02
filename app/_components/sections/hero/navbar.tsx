import { menus } from "@/core/constants/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden md:block">
      <ul className="flex items-center gap-4">
        {menus.map((menu) => (
          <Link key={menu.id} href={`${menu.id}`}>
            <li className="cursor-pointer">{menu.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
