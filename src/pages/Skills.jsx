import PageLayout from "@/Components/PageLayout/PageLayout";
import SkillCard from "@/Components/SkillCard/SkillCard";
import SkillInfo from "@/Components/SkillCard/SkillInfo";
import { SKILLS } from "@/utils/SKILLS";
import { useContext, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { StylesContext } from "@/StyleContext/StyleProvider";
const Skills = () => {
  const { skillsStyles: styles } = useContext(StylesContext);
  // importing skills from utils
  const ALLSKILLS = SKILLS;
  // state for selecting which genre's skill to display
  const [skillGenre, setSkillGenre] = useState("Frontend");
  const skillInfoArray = ALLSKILLS.find(
    (skill) => skill.title === skillGenre
  ).skills;
  return (
    <PageLayout>
      <main className={styles.skillsMain}>
        <h1 className={`${styles.heading}`}>Skills</h1>
        <div className={styles.skillsContent}>
          {/* Skill cards (TOPICS) */}
          <div className={styles.skills}>
            {SKILLS.map((skill) => {
              return (
                <SkillCard
                  key={skill.title}
                  title={skill.title}
                  icon={skill.icon}
                  skillGenre={skillGenre}
                  setSkillGenre={setSkillGenre}
                />
              );
            })}
          </div>
          {/* Skill information */}
          <div className={styles.skillsInfo}>
            {/* for grid display */}
            <AnimatePresence mode="wait">
              <m.div
                key={skillGenre}
                initial={{ opacity: 1, translateY: 80 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 80 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.skillInfoWrapper}>
                  <SkillInfo
                    key={skillGenre.title}
                    skillInfoArray={skillInfoArray}
                  />
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Skills;

// static site generation for fast navigations
export async function getStaticProps() {
  return {
    props: {},
  };
}
