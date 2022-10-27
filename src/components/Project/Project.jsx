import { ProjectCard } from "./ProjectCard";
import styles from "./Project.module.css";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiChakraui } from "react-icons/si";

import { Fade } from "react-awesome-reveal";
import { Text } from "@chakra-ui/react";
const projects = [
  {
    name: "Zoomcar.com",
    img: "ZoomCar.png",
    link: "https://zoomcar-one.vercel.app/",
    git: "https://github.com/aman-109/-expert-chance-2924/tree/main/my-app",
    about:
      " This is Zoom Car website which provide rental car. This was a team project where I with my teammates had created.My task was to do Login and Signup functionality, helped in the css part and some js functionality part.",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
    ],
  },
  {
    name: "Cricbuzz.com",
    img: "Cricbuzz.png",
    link: "https://my-cricbuzz.vercel.app/",
    git: "https://github.com/aman-109/lawful-chin-3963",
    about:
      "It is an Indian cricket news website owned by Times Internet. It features, news, articles and live coverage of cricket matches including videos, text commentary, player stats and team rankings.",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
    ],
  },
  {
    name: "PharmEasy.com",
    img: "PharmEasy.png",
    link: "https://lucent-duckanoo-8aee96.netlify.app",
    git: "https://github.com/VinayPathania/Team-Spartans.git",
    about:
      "This is e-commerce website used for buying and supplying medicine across the world.This was a team project where I with my teammates had created.My task was to do Login and Signup functionality and help in the css part. ",
    stacks: [
      <SiHtml5 className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Expedia.com",
    img: "Expedia.png",
    link: "https://sunny-sprinkles-b0ca64.netlify.app/",
    git: "https://github.com/aman-109/Team-Expedia",
    about:
      "Expedia is one of the fastest growing online travel portals in Asia, a comprehensive offering of flight inventory made available on the website, travellers can book rooms to meet every budget and travel services to complement.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
];
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <Text as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={8}>
          Projects
        </Text>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
