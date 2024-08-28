import homeStyles from "@/styles/Home.module.scss";
import contactStyles from "@/styles/Contact.module.scss";
import skillsStyles from "@/styles/Skills.module.scss";
import aboutMeStyles from "@/styles/AboutMe.module.scss";
import projectsStyles from "@/styles/Projects.module.scss";
import { createContext } from "react";

// context for getting over style reset on routing
const criticalStyles = {
  homeStyles,
  contactStyles,
  aboutMeStyles,
  skillsStyles,
  projectsStyles,
};
export const StylesContext = createContext(criticalStyles);

const StyleProvider = ({ children }) => {
  return (
    <StylesContext.Provider value={criticalStyles}>
      {children}
    </StylesContext.Provider>
  );
};

export default StyleProvider;
