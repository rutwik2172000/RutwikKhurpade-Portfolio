import styles from "@/styles/Skills.module.scss";
import Image from "next/image";
const SkillInfo = ({ skillInfoArray }) => {
  return skillInfoArray.map((skill) => {
    return (
      <div key={skill.skill} className={styles.eachSkillContainer}>
        <div className={styles.eachSkillImageContainer}>
          <Image
            priority={true}
            className={styles.skillInfoImage}
            src={skill.skillIcon}
            alt={skill.skill}
            height={50}
            width={80}
            loading="eager"
          />
        </div>
        <span className={styles.SkillInfoTitle}>{skill.skill}</span>
      </div>
    );
  });
};

export default SkillInfo;
