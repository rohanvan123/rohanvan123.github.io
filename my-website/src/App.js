import React from "react";
import profilePic from "/Users/rohan_v/Documents/Projects/Personal Website/rohanvan123.github.io/my-website/src/images/personal_photo.jpg"
import resume from "/Users/rohan_v/Documents/Projects/Personal Website/rohanvan123.github.io/my-website/src/data/Resume.pdf";
import icons from "./icons/icons.ts"
import projects from "./data/projects.json"
import parseProjects from "./utils/utils.ts"
import CustomSlider from "./components/CustomSlider.tsx";
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

        <div style={isMobile ? {width: "90%", lineHeight: "1.2"} : { width: '700px', align: "left", fontSize: "22px", marginTop: "20px", marginBottom: "40px", lineHeight: "1.5" }} >
          <p>
            Hello! My name is Rohan Vanjani, and I am a rising Junior at the <em className="sp-text">University of Illinois at Urbana-Champaign </em>
            currently pursuing a <i>B.S.</i> in <em className="sp-text">Computer Science & Mathematics</em>. I have a passion for programming
            and building full-stack applications. I am currently seeking opportunities related to <em className="sp-text">Software Engineering</em>,
            Product Development, and Machine Learning. This summer, I am returning to <em className="sp-text">Zebra Technologies </em>as a <em className="sp-text">Software Engineer Intern II</em> on their 
            Cloud Infrastructure team. On campus, I am currently a <em className="sp-text">Software Developer</em> for <a className="sp-text" href="https://uiuc.hack4impact.org/">Hack4Impact</a>,
            where we build full-stack applications for local nonprofits. This past semester, I served as a <em className="sp-text">Research Assistant </em> 
            under <em className="sp-text">Dr. Hari Sundaram</em>, where we built a web-scraping model to determine price discrimination on Amazon. Outside of school, 
            I am an avid tutor and also enjoy weightlifting, investing, fishing, and watching basketball.
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
