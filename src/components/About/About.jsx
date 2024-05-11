import styles from "./About.module.css";
import { Fade } from "react-awesome-reveal";
import { Text } from "@chakra-ui/react";

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <Text color={"#383874"} fontSize={{ base: "xl", md: "3xl" }}>Work Experience</Text>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="https://avatars.githubusercontent.com/u/101388858?v=4"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>            <p>
              <b>Intoglo Pvt Ltd ,</b> a cross-border logistics company              <br />
              Associate Software Developer              <br />
              Mar 2023 - Present              <br />
              <br />              <ul className={styles.experiencebullets}>
                <li>                Developed core features for a client-facing web application, enhancing user experience with real-time shipment tracking and detailed information, including location updates, status changes, and estimated delivery times.
                  </li>                <li>
                Collaborated with cross-functional teams to design and implement new features and improve existing codebase.                  </li>
                  <li>                  Contributed to the development and launch of an AI-driven HS Classification system to streamline export processes.
                  </li>                  <li>
                    Automated the workflows using web scrapping techniques and cron jobs.                  </li>
              </ul>            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
