import React from "react";
import profilePic from "/Users/rohan_v/Documents/Projects/Personal Website/rohanvan123.github.io/my-website/src/images/personal_photo.jpg"
import resume from "/Users/rohan_v/Documents/Projects/Personal Website/rohanvan123.github.io/my-website/src/data/Resume.pdf";
import icons from "./icons/icons.ts"
import projects from "./data/projects.ts"
import parseProjects from "./utils/utils.ts"
import CustomSlider from "./components/CustomSlider.tsx";
import EmText from "./components/Em.tsx"
import { useMobile } from "./hooks/useMobile.ts"
import { FaFileDownload } from 'react-icons/fa';
import { Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import ProjectContainer from "./components/ProjectContainter.tsx"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'react-multi-carousel/lib/styles.css';

import './App.css';

function App() {

  document.title = "Rohan Vanjani";
  const { isMobile } = useMobile();

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="container"
          style={{ width: "450px" }} >
          <h1 className="typed-out">
            Rohan Vanjani
          </h1>
        </div>

        <div style={{ display: "flex", justifyContent: "space-evenly", width: "200px", paddingBottom: "50px" }}>
          {icons.map((icon, idx) => (
            <Link key={idx} href={icon.link} isExternal>
              <Icon
                as={icon.type}
                color="orange" boxSize={30}
                _hover={{ color: "white" }}
              />
            </Link>
          ))}
        </div>

        <div className="image-cropper">
          <img className={isMobile ? "rounded-mobile" : "rounded"} src={profilePic} alt="" />
        </div>

        <div style={isMobile ? {width: "90%", lineHeight: "1.2"} : { width: '630px', align: "left", fontSize: "22px", marginTop: "20px", marginBottom: "40px", lineHeight: "1.5" }} >
          <p>
            Hello! My name is Rohan Vanjani, and I am a Senior <EmText>University of Illinois at Urbana-Champaign </EmText>
            currently pursuing a <i>B.S.</i> in <EmText>Computer Science & Mathematics</EmText>. I have a passion for programming
            and building full-stack applications. I am currently seeking opportunities related to <EmText>Software Engineering</EmText>
            , Financial Technology, and Artificial Intelligence. 
            This past summer, I interned at <EmText href="https://www.chicagoventure.com">Chicago Venture Partners</EmText> as a 
            <EmText> Full Stack Developer</EmText> on their 
            Web team. I have also completed two past Software Engineering internships at <EmText>Zebra Technologies</EmText>. 
            On campus, I served as a Software Developer for three semesters with 
            <EmText> Hack4Impact UIUC</EmText>, building software for nonprofits. Outside of school, 
            I am an avid tutor and also enjoy weightlifting, investing, watching basketball, and Bhangra.
          </p>
        </div>

        <h1 style={{ marginTop: "30px" }}>Experience</h1>

        <CustomSlider />

        <h1 style={{ marginTop: "100px" }}>Projects</h1>

        <ProjectContainer projectList={parseProjects(projects)}/>

        <a className="download-link" href={resume} target="_blank" rel="noreferrer">
          <FaFileDownload size="40px" style={{marginTop: "5px"}}/>
          <em style={{marginTop: "12px"}}>Download My Resume</em>
        </a>


      </header>
    </div>
  );
}

export default App;
