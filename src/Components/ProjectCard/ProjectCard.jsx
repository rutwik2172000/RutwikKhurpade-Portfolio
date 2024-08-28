import styles from "@/styles/Projects.module.scss";

import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { useRouter } from "next/router";
import Image from "next/image";
const ProjectCard = ({
  title,
  deploymentLink,
  githubLink,
  image,
  description,
}) => {
  const router = useRouter();
  return (
    <div className={styles.projectCardContainer}>
      {/* card container with title*/}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardContainer}>
        <Image width={1000} height={1000} src={image} alt={title} />
        <div className={styles.content}>
          <div className={styles.linksDiv}>
            <div
              className={styles.btnContainer}
              onClick={() => router.push(`${deploymentLink}`)}
            >
              <TbWorld size={"1.5rem"} />
              <span>Website</span>
            </div>
            <div
              className={styles.btnContainer}
              onClick={() => router.push(`${githubLink}`)}
            >
              <FiGithub size={"1.5rem"} />
              <span>Github</span>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
