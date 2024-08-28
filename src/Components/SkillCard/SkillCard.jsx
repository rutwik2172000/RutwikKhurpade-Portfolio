import styles from "@/styles/Skills.module.scss";
import Image from "next/image";
const SkillCard = ({ title, icon, skillGenre, setSkillGenre }) => {
  return (
    // main div that acts as a grid
    <div
      className={`${styles.skillCard}  ${
        title === skillGenre ? styles.activeCard : ""
      } `}
      onClick={() => setSkillGenre(title)}
    >
      {/*skill image  */}
      <Image
        className={styles.skillIconImage}
        src={icon}
        alt={title}
        width={50}
        height={50}
        loading="eager"
      />
      {/* skill title */}
      <span className={styles.skillTitle}>{title}</span>
    </div>
  );
};

export default SkillCard;
