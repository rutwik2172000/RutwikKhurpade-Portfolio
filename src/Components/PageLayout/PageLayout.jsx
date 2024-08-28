import Head from "next/head";
import { useState } from "react";
import MobileNavBar from "../Navbar/MobileNavBar";
import Navbar from "../Navbar/Navbar";
import styles from "@/styles/PageLayout.module.scss";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// Page layout for ensuring consistent layouts across whole website
const PageLayout = ({ children }) => {
  // state for toggling navbar Visibility in mobile screens.
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <section className={styles.pageSection}>
      <Head>
        <title>Rutwik Khurpade</title>
        <meta
          name="description"
          content="Hey Folks! I am Rutwik Khurpade and this is my portfolio website "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      {/* navbars */}
      <header>
        <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
        <MobileNavBar isNavbarOpen={isNavbarOpen} />
        {isNavbarOpen && (
          <div
            className={styles.overlay}
            onClick={() => setIsNavbarOpen(false)}
          ></div>
        )}
      </header>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        closeOnClick
        transition={Bounce}
        theme="dark"
        hideProgressBar={false}
        pauseOnHover={false}
        draggable={false}
      />
      {children}
    </section>
  );
};

export default PageLayout;
