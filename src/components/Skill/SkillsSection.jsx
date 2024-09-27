import { SkillCard } from "./SkillCard";
import styles from "./SkillsSection.module.css";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiAdonisjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import { FaGitAlt } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";

import { Fade } from "react-awesome-reveal";
import { Text } from "@chakra-ui/react";

export function SkillsSection() {
  return (
    <div className={styles.rootCont} id="skills">
      <Fade bottom>
        <Text
          as={"h1"}
          colorScheme="#383874"
          fontSize={{ base: "xl", md: "3xl" }}
          mb={8}
        >
          Front-end skills
        </Text>
        <div className={styles.skillsContFront}>
          <SkillCard
            skill="Next.js"
            icon={
              <SiNextdotjs
                className={`${styles.skillIcon} ${styles.nextjsIcon}`}
              />
            }
          />
          <SkillCard
            skill="React"
            icon={
              <GrReactjs
                className={`${styles.skillIcon} ${styles.reactIcon}`}
              />
            }
          />
          <SkillCard
            skill="Redux"
            icon={
              <SiRedux className={`${styles.skillIcon} ${styles.reduxIcon}`} />
            }
          />
          <SkillCard
            skill="JavaScript"
            icon={
              <SiJavascript
                className={`${styles.skillIcon} ${styles.jsIcon}`}
              />
            }
          />
          <SkillCard
            skill="TypeScript"
            icon={
              <SiTypescript
                className={`${styles.skillIcon} ${styles.tsIcon}`}
              />
            }
          />
          <SkillCard
            skill="Tailwind"
            icon={
              <SiTailwindcss
                className={`${styles.skillIcon} ${styles.cuiIcon}`}
              />
            }
          />

          <SkillCard
            skill="Html"
            icon={
              <SiHtml5 className={`${styles.skillIcon} ${styles.htmlIcon}`} />
            }
          />
          <SkillCard
            skill="Css"
            icon={
              <SiCss3 className={`${styles.skillIcon} ${styles.cssIcon}`} />
            }
          />
        </div>
        <Text
          as={"h1"}
          colorScheme="#383874"
          fontSize={{ base: "xl", md: "3xl" }}
          mb={8}
        >
          Back-end skills
        </Text>
        <div className={styles.skillsContBack}>
          <SkillCard
            className={styles.nodess}
            skill="Node"
            icon={
              <SiNodedotjs
                className={`${styles.skillIcon} ${styles.nodeIcon}`}
              />
            }
          />
          <SkillCard
            skill="Express"
            icon={
              <SiExpress
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />
          <SkillCard
            skill="AWS"
            icon={
              <SiAmazonaws
                className={`${styles.skillIcon} ${styles.awsIcon}`}
              />
            }
          />
          <SkillCard
            className={styles.nodess}
            skill="AdonisJS"
            icon={
              <SiAdonisjs
                className={`${styles.skillIcon} ${styles.adnodeIcon}`}
              />
            }
          />

          <SkillCard
            skill="MySql"
            icon={
              <SiMysql className={`${styles.skillIcon} ${styles.sqlIcon}`} />
            }
          />
          <SkillCard
            skill="MongoDb"
            icon={
              <SiMongodb
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />
        </div>

        <Text
          as={"h1"}
          colorScheme="#383874"
          fontSize={{ base: "xl", md: "3xl" }}
          mb={8}
        >
          Tools
        </Text>
        <div className={styles.toolsDiv}>
          <SkillCard
            skill="Git"
            icon={
              <FaGitAlt className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
          <SkillCard
            skill="Npm"
            icon={<SiNpm className={`${styles.skillIcon} ${styles.gitIcon}`} />}
          />
          <SkillCard
            skill="Postman"
            icon={
              <SiPostman className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </div>
      </Fade>
    </div>
  );
}
