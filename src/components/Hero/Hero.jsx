// import { Button } from "@chakra-ui/react";
// // import { makeStyles } from "@mui/styles";
// import styles from "./Hero.module.css";

// import { AiOutlineGithub } from "react-icons/ai";
// import { AiFillLinkedin } from "react-icons/ai";

// import { RiDownloadLine } from "react-icons/ri";
// import { Fade } from "react-awesome-reveal";

// // const useStyles = makeStyles({
// //   contactBtn: {
// //     color: "black",

// //     backgroundColor: "rgb(208,135,104)",
// //     width: "130px",
// //     height: "45px",

// //     "&:hover": {
// //       backgroundColor: "rgb(221, 128, 23)",
// //     },
// //   },
// //   linkedInIcon: {
// //     fontSize: "40px",

// //     color: "rgb(8, 111, 143)",
// //     "&:hover": {
// //       backgroundColor: "rgb(17, 155, 197)",
// //     },
// //   },
// //   gitIcon: {
// //     fontSize: "35px",
// //     color: "rgb(42, 42, 42)",

// //     "&:hover": {
// //       backgroundColor: "rgb(100, 100, 100)",
// //     },
// //   },
// //   a: {
// //     textDecoration: "none",
// //   },
// // });
// export function HeroSection() {
//   // const classes = useStyles();
//   return (
//     <div className={styles.rootCont} id="hero">
//       <Fade>
//         <div className={styles.nameCont}>
//           <p>Hi,</p>
//           <p>
//             I am <span>Aman</span>{" "}
//           </p>
//           <p>Full Stack Web Developer</p>
//           {/* <a
//             href="https://drive.google.com/file/d/1OXo0mM30KYrTHOwPubb2kjfaVDBzIbPy/view?usp=sharing"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button variant="contained">
//               <RiDownloadLine
//                 style={{
//                   fontSize: "18px",
//                   marginLeft: "10px",
//                   marginRight: "5px",
//                 }}
//               />
//               Resume
//             </Button>
//           </a> */}
//         </div>

//          <div className={styles.photoCont}>
//           <img
//             src="https://user-images.githubusercontent.com/101388858/196033227-a44469e1-e6c8-43d7-a9d4-056c5007ca72.png"
//             alt=""
//             className={styles.heroImg}
//           />
//         </div>
//         {/*
//         <div className={styles.socialCont}>
//           <a
//             rel="noreferrer"
//             href="https://www.linkedin.com/in/antara-5aa95a209/"
//             className={classes.a}
//             target="_blank"
//           >
//             <AiFillLinkedin className={styles.linkedInIcon} />
//           </a>
//           <a
//             rel="noreferrer"
//             href="https://github.com/Antara12345"
//             className={classes.a}
//             target="_blank"
//           >
//             <AiOutlineGithub className={styles.gitIcon} />
//           </a>
//         </div> */}
//       </Fade>
//     </div>
//   );
// }



import { Button } from "@chakra-ui/react"
// import { makeStyles } from "@material-ui/styles"
import styles from "./Hero.module.css"

// import { AiOutlineGithub } from "react-icons/ai"
// import { AiFillLinkedin } from "react-icons/ai"

// import { RiDownloadLine } from "react-icons/ri"
import {Fade} from "react-awesome-reveal"

// const useStyles = makeStyles({
//   contactBtn: {
//     color: "black",

//     backgroundColor: "rgb(208,135,104)",
//     width: "130px",
//     height: "45px",

//     "&:hover": {
//       backgroundColor: "rgb(221, 128, 23)",
//     },
//   },
//   linkedInIcon: {
//     fontSize: "40px",

//     color: "rgb(8, 111, 143)",
//     "&:hover": {
//       backgroundColor: "rgb(17, 155, 197)",
//     },
//   },
//   gitIcon: {
//     fontSize: "35px",
//     color: "rgb(42, 42, 42)",

//     "&:hover": {
//       backgroundColor: "rgb(100, 100, 100)",
//     },
//   },
//   a: {
//     textDecoration: "none",
//   },
// })
export function HeroSection() {
  // const classes = useStyles()
  return (
    <div className={styles.rootCont} id="hero">
      <Fade>
        <div className={styles.nameCont}>
          <p>Hi,</p>
          <p>
            I am <span>Antara</span>{" "}
          </p>
          <p>Full Stack Web Developer</p>
          {/* <a
            href="https://drive.google.com/file/d/1OXo0mM30KYrTHOwPubb2kjfaVDBzIbPy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" >
              <RiDownloadLine
                style={{
                  fontSize: "18px",
                  marginLeft: "10px",
                  marginRight: "5px",
                }}
              />
              Resume
            </Button>
          </a> */}
        </div>

        <div className={styles.photoCont}>
          <img
            src="https://user-images.githubusercontent.com/101388858/196033227-a44469e1-e6c8-43d7-a9d4-056c5007ca72.png"
            alt=""
            className={styles.heroImg}
          />
        </div>
        {/* <div className={styles.socialCont}>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/antara-5aa95a209/"
            className={classes.a}
            target="_blank"
          >
            <AiFillLinkedin className={styles.linkedInIcon} />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/Antara12345"
            className={classes.a}
            target="_blank"
          >
            <AiOutlineGithub className={styles.gitIcon} />
          </a>
        </div> */}
      </Fade>
    </div>
  )
}
