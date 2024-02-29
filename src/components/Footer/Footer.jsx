import clsx from "clsx";
import styles from "./Footer.module.scss";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.footerInfo)}>
        <p className={styles.companyName}>
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </p>
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
