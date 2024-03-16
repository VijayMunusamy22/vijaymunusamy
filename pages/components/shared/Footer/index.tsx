import NextLink from "next/link";
import { Image, Link, Text } from "@chakra-ui/react";
import styles from "./Footer.module.css";
import { Cookie, ReceiptText } from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.imageBox}></div>
      <div className={styles.footerLinks}>
        <Link
          as={NextLink}
          href="/privacy-and-terms"
          className={styles.footerLink}
        >
          <ReceiptText size={24} />
          <Text marginLeft={6}>Privacy and Terms</Text>
        </Link>
        <Link
          as={NextLink}
          href="/manage-cookies"
          className={styles.footerLink}
        >
          <Cookie size={24} />
          <Text marginLeft={6}>Manage Cookies</Text>
        </Link>
      </div>
      <div className={styles.socialMediaIcons}>
        <Image
          src="/icons/socialMedia/instagram.svg"
          alt="Instagram"
          className={styles.socialMediaIcon}
        />
        <Image
          src="/icons/socialMedia/github.svg"
          alt="GitHub"
          className={styles.socialMediaIcon}
        />
        <Image
          src="/icons/socialMedia/linkedin.svg"
          alt="LinkedIn"
          className={styles.socialMediaIcon}
        />
        <Image
          src="/icons/socialMedia/stackOverflow.svg"
          alt="StackOverflow"
          className={styles.socialMediaIcon}
        />
      </div>
    </footer>
  );
};

export default Footer;
