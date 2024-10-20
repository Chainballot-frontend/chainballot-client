import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";



const Footer = () => {
  return (
    <div className="p-16">
      <hr className=" " />
      <div className="p-16 flex flex-row justify-between">
        <div>
          <Link href={"/"}>
            <Image
              src={"/Images/CHAINBALLOT.svg"}
              width={100}
              height={100}
              alt="Logo"
            />
          </Link>
        </div>

        <div className=" flex flex-col space-y-3">
          <ul className=" flex flex-row text-[1rem] gap-2 font-semibold">
            <li className=" divide-y-4">
              <Link href={''}>Home</Link>
            </li>
            <li>
              <Link href={''}>Contact</Link>
            </li>
            <li>
              <Link href={''}>Faqs</Link>
            
            </li>
          </ul>

          <div className=" flex flex-row gap-2">
          <Facebook/>
          <Twitter/>
          <Instagram/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
