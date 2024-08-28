import ContactForm from "@/Components/ContactForm/ContactForm";
import PageLayout from "@/Components/PageLayout/PageLayout";
import { StylesContext } from "@/StyleContext/StyleProvider";
import { useContext } from "react";
const Contact = () => {
  const { contactStyles: styles } = useContext(StylesContext);
  return (
    <PageLayout>
      {/* main div */}
      <div className={styles.contactMain}>
        <h1 className={styles.heading}>Contact</h1>
        {/* form parent container */}
        <div className={styles.formParent}>
          <h2 className={styles.subheading}>Connect With Me</h2>
          {/* form */}
          <ContactForm />
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
// static site generation for fast navigations
export async function getStaticProps() {
  return {
    props: {},
  };
}
