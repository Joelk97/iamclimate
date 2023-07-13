import email from "../../public/icons/mi_email.svg";
import phone from "../../public/icons/phone.svg";
import insta from "../../public/icons/insta.svg";
import Image from "next/legacy/image";

const Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footerContainer">
      <div className="containerLinks">
        <div className="icon">
          <a href="mailto:iamclimate.earth@gmail.com">
            <Image
              alt="email logo"
              layout="fill"
              objectFit="contain"
              src={email}
            />
          </a>
        </div>
        <div className="icon">
          <a href="tel:00415675656">
            <Image
              alt="phone logo"
              layout="fill"
              objectFit="contain"
              src={phone}
            />
          </a>
        </div>
        <div className="icon">
          <a target="_blank" href="https://www.instagram.com/iamclimate.earth/">
            <Image
              alt="insta logo"
              layout="fill"
              objectFit="contain"
              src={insta}
            />
          </a>
        </div>
      </div>
      <a style={{ textDecoration: "none" }} href="https://www.joelkuehl.ch/">
        <p className="copyright">{`© Copyright - ${year} Joel Kuehl Web & Software Development`}</p>
      </a>
    </footer>
  );
};

export default Footer;
