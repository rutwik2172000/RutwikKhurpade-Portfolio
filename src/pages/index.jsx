import { Typewriter } from "react-simple-typewriter";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { useRouter } from "next/router";
import PageLayout from "@/Components/PageLayout/PageLayout";
import { useContext } from "react";
import { StylesContext } from "@/StyleContext/StyleProvider";
function Home() {
  const router = useRouter();
  const { homeStyles: styles } = useContext(StylesContext);
  return (
    <PageLayout>
      <main className={styles.homeMain}>
        {/* hero Section */}
        {/* heroText Div */}
        <div>
          <h1 className={styles.heading}>Hey Folks!</h1>
          <p className={styles.subheading}>
            I am
            <span className={styles.typed}>
              <Typewriter
                loop={true}
                typeSpeed={100}
                cursor
                deleteSpeed={50}
                words={["Rutwik Khurpade", "a Developer"]}
              />
            </span>
          </p>
          <p className={styles.tagline}>
            I am enthusiastic about taking on challenging projects and actively <br /> contributing to the success of the organization
            while staying updated <br /> with emerging technologies to ensure exceptional Backend solutions.
          </p>
        </div>
        {/* hero socials */}
        <div className={styles.socialsDiv}>
          {/* github */}
          <div
            className={styles.socialLinks}
            onClick={() => router.push("https://github.com/rutwik2172000")}
          >
            <FiGithub className={styles.github} size={"1.5rem"} />
          </div>
          {/* twitter */}
          <div
            className={styles.socialLinks}
            onClick={() => router.push("https://x.com/khurpade13147?t=-JuNdmL180ZZGC3MYaeMiQ&s=09")}
          >
            <BsTwitterX className={styles.twitter} size={"1.5rem"} />
          </div>
          {/* linkedin*/}
          <div
            className={styles.socialLinks}
            onClick={() =>
              router.push("https://www.linkedin.com/in/rutwik-khurpade-795051256")
            }
          >
            <FaLinkedinIn className={styles.linkedin} size={"1.5rem"} />
          </div>
          {/* instagram*/}
          <div
            className={styles.socialLinks}
            onClick={() =>
              router.push("https://www.instagram.com/_rutvik21/")
            }
          >
            <FaInstagram className={styles.instagram} size={"1.5rem"} />
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
export default Home;

// static site generation for fast navigations
export async function getStaticProps() {
  return {
    props: {},
  };
}
