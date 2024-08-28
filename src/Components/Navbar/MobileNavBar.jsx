import styles from "@/styles/MobileNav.module.scss";
import { Navigation } from "@/utils/Navigation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const MobileNavBar = ({ isNavbarOpen }) => {
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
    <>
      <div
        className={`${styles.mobileNav} ${isNavbarOpen ? styles.active : ""}`}
      >
        <Image
          priority={true}
          src={"/Logo.png"}
          alt="Logo"
          width={50}
          height={50}
          className={styles.img}
        />
        <ul className={styles.ul}>
          {navigationArray.map((navigator, index) => {
            // to map all naviagtion links from the navigatorArray
            return (
              <Link key={index} href={navigator.to}>
                <li
                  className={`${
                    router.pathname === navigator.to ? styles.activeLink : ""
                  } ${styles.li}`}
                >
                  {navigator.label}
                </li>
              </Link>
            );
          })}
        </ul>
        {/* Download resume button */}
        <button className={styles.resume} onClick={handleDownload}>
          Resume
        </button>
      </div>
    </>
  );
};

export default MobileNavBar;
