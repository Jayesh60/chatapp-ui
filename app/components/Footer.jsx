import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-24 md:flex hidden py-6 w-full">
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-3xl font-extrabold text-light-salmon">Logo</h1>
        </div>
        <div className="flex gap-4 items-center">
          <Link href={"/"} className="text-sm text-white">Contact@000000.tech</Link>
          <Link href={"/"}>
            <Image alt="telegram" src={"/socialMedia/telegram.svg"} height={22} width={22}/>
          </Link>
          <Link href={"/"}>
            <Image alt="instagram" src={"/socialMedia/instagram.svg"} height={22} width={22}/>
          </Link>
          <Link href={"/"}>
            <Image alt="x" src={"/socialMedia/x.svg"} height={20} width={20}/>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
