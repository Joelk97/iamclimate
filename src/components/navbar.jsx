import "../app/globals.css";
import Link from "next/link";
import Image from "next/legacy/image";
import Logo from "../../public/iamclimate.svg";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbarTop">
        <div className="containerLogo">
          <Link href="/">
            <Image
              alt="I am climate logo"
              layout="fill"
              objectFit="contain"
              src={Logo}
            />
          </Link>
        </div>
        <ul className="navRouting">
          <li>
            <Link href="/chi-siamo">Chi siamo</Link>
          </li>
          <li>
            <p>Progetti</p>
          </li>
          <li>
            <p>Eventi</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
