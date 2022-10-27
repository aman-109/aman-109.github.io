import styles from "./About.module.css";
import { Fade } from "react-awesome-reveal";
import { Text } from "@chakra-ui/react";

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <Text color={"#383874"} fontSize={{ base: "xl", md: "3xl" }}>About</Text>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="https://avatars.githubusercontent.com/u/101388858?v=4"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            <h2>
              I am <span>Aman Mate</span>
            </h2>
            <p>
              A web developer with a vast array of knowledge in many different
              front end and backend languages, responsive frameworks, databases,
              and best code practices. Look forward to using my skills for
              gaining more experience.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
