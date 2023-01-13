import { ProjectCard } from "./ProjectCard";
import styles from "./Project.module.css";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { Fade } from "react-awesome-reveal";
import { Text } from "@chakra-ui/react";
const projects = [
  {
    name: "Hubpoint.com",
    img: "Hubpoint.png",
    link: "https://hubpoint-aman-109.vercel.app/",
    git: "https://github.com/aman-109/axiomatic-spring-6378-HubPointCRM",
    about:
    "HubPoint is CRM website that provides app services, marketing and ad tools for the website which will divert traffic. It assists marketing, sales, content management, and customer service at every point by providing them with better strategy and resources.",
    stacks: [
      <p className={styles.stackIcon}><SiReact />React</p>,
      <p className={styles.stackIcon}><SiChakraui/>Chakra UI</p>,
      <p className={styles.stackIcon}><SiExpress/>Express</p>,
      <p className={styles.stackIcon}><SiNodedotjs/>Node</p>,
      <p className={styles.stackIcon}><SiMongodb/>MongoDB</p>,
      // <SiReact className={styles.stackIcon} />,
      // <SiChakraui className={styles.stackIcon} />,
      

    ],
  },
  {
    name: "MuscleFit.com",
    img: "MuscleFit.png",
    link: "https://musclefit-201.netlify.app/",
    git: "https://github.com/aman-109/dainty-market-1579-MuscleFit",
    about:
    "A MuscleFit is fitness application, that provides customer based customized workout plans and provide access to track them.It is social workout tracking platform that keeps gym goers stay motivated by tracking and analyzing their fitness goals.",
    stacks: [
      <p className={styles.stackIcon}><SiReact />React</p>,
      <p className={styles.stackIcon}><SiChakraui/>Chakra UI</p>,
      <p className={styles.stackIcon}><SiExpress/>Express</p>,
      <p className={styles.stackIcon}><SiNodedotjs/>Node</p>,
      <p className={styles.stackIcon}><SiMongodb/>MongoDB</p>,
      // <SiReact className={styles.stackIcon} />,
      // <SiChakraui className={styles.stackIcon} />,
      

    ],
  },
  {
    name: "Zoomcar.com",
    img: "ZoomCar.png",
    link: "https://zoomcar-one.vercel.app/",
    git: "https://github.com/aman-109/-expert-chance-2924/tree/main/my-app",
    about:
      " This is Zoom Car website which provide rental car. This was a team project where I with my teammates had created.My task was to do Login and Signup functionality, helped in the css part and some js functionality part.",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      // <SiChakraui className={styles.stackIcon} />,
      <p className={styles.stackIcon}><SiReact />React Js</p>,
      <p className={styles.stackIcon}><SiChakraui/>Chakra UI</p>,
      

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
      ,
      // <SiChakraui className={styles.stackIcon} />,
      <p className={styles.stackIcon}><SiReact />React Js</p>,
      <p className={styles.stackIcon}><SiChakraui/>Chakra UI</p>,
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
      // <SiHtml5 className={styles.stackIcon} />,
      // <SiJavascript className={styles.stackIcon} />,
      // <SiCss3 className={styles.stackIcon} />,
      <p className={styles.stackIcon}><SiHtml5/>HTML</p>,
      <p className={styles.stackIcon}><SiCss3/>CSS</p>,
      <p className={styles.stackIcon}><SiJavascript/>JAVASCRIPT</p>,
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
    //   <SiJavascript className={styles.stackIcon} />,
    //   <SiHtml5 className={styles.stackIcon} />,
    //   <SiCss3 className={styles.stackIcon} />,
    <p className={styles.stackIcon}><SiHtml5/>HTML</p>,
    <p className={styles.stackIcon}><SiCss3/>CSS</p>,
    <p className={styles.stackIcon}><SiJavascript/>JAVASCRIPT</p>,
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
