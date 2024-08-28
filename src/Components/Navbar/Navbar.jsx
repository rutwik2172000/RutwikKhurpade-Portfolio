import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
import { Navigation } from "@/utils/Navigation";
const Navbar = ({ setIsNavbarOpen, isNavbarOpen }) => {
  const router = useRouter();
  // importing navigation array from utils
  const navigationArray = Navigation;

  // function to implement the donwload resume functionality
  const handleDownload = async () => {
    const response = await fetch("/api/file");

    if (response.status !== 200) {
      console.error(response.status, response.statusText);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "RutwikKhurpadeResume.pdf";
    link.click();
  };

  return (
    <div className={`${styles.navbar}`}>
      {/* logo */}
      <Link href={"/"}>
        <Image
          src="/Logo.png"
          height={50}
          width={50}
          alt="Logo"
          className={styles.brand}
          priority={true}
        />
      </Link>
      {/* all navlinks and hireme button */}
      <div className={styles.navLinks}>
        <ul className={styles.ul}>
          {navigationArray.map((navigator, index) => {
            // to map all naviagtion links from the navigatorArray
            return (
              <Link key={index} href={navigator.to}>
                <li
                  className={`${styles.li} ${
                    router.pathname === navigator.to ? styles.activeLink : ""
                  }`}
                >
                  {navigator.label}
                </li>
              </Link>
            );
          })}
        </ul>
        {/* hire me button */}
        <button className={styles.resume} onClick={handleDownload}>
          Resume
        </button>
      </div>
      <div
        className={styles.burgerMenuDiv}
        onClick={() => setIsNavbarOpen((toggleNav) => !toggleNav)}
      >
        {isNavbarOpen ? (
          <IoMdClose className={styles.burgerMenu} />
        ) : (
          <GiHamburgerMenu className={styles.burgerMenu} />
        )}
      </div>
    </div>
  );
};

export default Navbar;

export async function getServerSideProps(context) {
  return {
    props: {
      data: "hello",
    },
  };
}
