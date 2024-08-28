import Link from "next/link";
import styles from "@/styles/404.module.scss";
import PageLayout from "@/Components/PageLayout/PageLayout";
const Custom404 = () => {
  return (
    <PageLayout>
      <main className={styles.pageNotFound}>
        <h1>404 Not Found</h1>
        <Link className={styles.link} href={"/"}>
          Get Back to home?
        </Link>
      </main>
    </PageLayout>
  );
};

export default Custom404;
