import profilePic from "/Users/rohan_v/Documents/Projects/Personal Website/rohanvan123.github.io/my-website/src/images/personal_photo.jpg"
import ibcLogo from "/Users/rohan_v/Documents/Projects/Personal Website/rohanvan123.github.io/my-website/src/images/ibc-logo.jpeg"
import resume from "/Users/rohan_v/Documents/Projects/Personal Website/rohanvan123.github.io/my-website/src/data/resume.pdf";
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'
import {Link} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";
import { useEffect } from "react";
import './App.css';

const icons = [
  {
    type: FaGithub,
    link: "https://github.com/rohanvan123"
  },
  {
    type: FaLinkedin,
    link: "https://www.linkedin.com/in/rohan-vanjani-2025/"
  },
  {
    type: FaTwitter,
    link: "https://twitter.com/rovanjani"
  },
  {
    type: MdEmail,
    link: "mailto: rohanvanj21@gmail.com"
  }
]

const experiences = [
  {
    url: "https://www.zebra.com/us/en.html",
    company: "Zebra Technologies",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABeCAMAAACqwpxoAAAAbFBMVEX///8AAAh/f4MPDxcvLzY/P0WkpKe/v8EFBQ2vr7IfHyaPj5OWlpkJCRHPz9GHh4tfX2R3d3vv7/DIyMrf3+Bvb3T29vZPT1VoaG0ZGSA3Nz1aWl+6urwpKTDb29wVFRynp6o1NTtKSlA+PkTQam/HAAADQklEQVRYhe3Y27qqIBAAYNDy2EHNtHOt1vu/42ZmQEUOUnf7+9bcZMWfQKMMMuaK4nxNnV8uRME575vQ1t1tbvmqC6N5wfdzy6ugk56g6QST5bsAe9hyHUtbh5w4nWFp3yF2jqVdLagun+JIs78L9sQTfD3EkyFKe/TTXDTZGFhaf2512MrAZNf+0+4ybsNon63fstyKwd4fC9SBC34vQ7JZw7snzVJcQCxfh1aMsb15VG7iaGJ5ljttnZlYsx685jKpcszIeLD3lYof13V45gpjOo8WQHpyD1YEdjVRXZhb7sU0psRlvTgZsdUGYrvldYVhTZKNwg4b1ZQkXuyyLADHLhuCndaBUx07LDs2ELNr8plr2GJL+Ci2/VWxTPX9grX9zzHXsNvyq8Vq2GPNWzV8OME+a9xv8c424o8sTbDE0bKN1iJeEtO1kNHbetH2MvmnWL7dh1k7DrTyjmriEEsfmzhSaeyzQ4Gg42j4brgAWhF5LCIbbMZseF62yHhwLQr2CS40OynbAvBes4fJN0lm4FmB1N0nVL8mcwPPi6t27PV7dg/RFtI0thRmzZXkdj4VZvFgKeoe+6o/Jba6eoaXCkIfXioIfXipuvLiT+M/xTKdy+WWbmxmTzj+LDd0/KVF/K0F/LUV+HvL0sv3li1vF/7iL/4C45bLaB/y4Mbo6IYbwRQPD2q9bbCppGo13rblUIWonejzRdsmEdmVFk5sJMvhH2WPzLRQVazVIT2QusDhGWl7FFHBaRu0lXgboU02bywrhI2rfisXipZ+Z9yxwBYmou7QSMA2WM2twYr71o5T1V+qTspoxY8+G9N2W2hPFjbKa+ryaqU6zeB5Dq09YHuxbazRbvYX7BzZls4LL1E0droVy965G/szmauC5vkZneDZQ0JNdrux05VaL02bXbtxnn+pywUWh1RNQolZdMq+0jQ9oE0PZSbnGRe2uqMuF1VVcFkS9lzVcsY89zApMN5+MiNDOtDk35ndXmDTA/YhehC3MjHUwBiDBHjCY4w9Wnis8UZb1zDSC81zjdMMXe7FoNIeO52q38laa07mZBuY57TEDxg9ajuOvTha5jn7of9oRXuw+6+YNpxVyJriH8/fK5nAoJKhAAAAAElFTkSuQmCC",
    position: "Software Engineer Intern",
    tenure: "May 2022 - August 2022",
    description: "Developed Python programs to diagnose faulty label printers using data compiled on Google Cloud."
  }, 
  {
    url: "https://www.zebra.com/us/en.html",
    company: "Hack4Impact UIUC",
    img: "https://ashayp.com/images/h4i.jpeg",
    position: "Software Developer",
    tenure: "September 2022 - Present",
    description: "Building public-facing web and mobile applications for nonprofit organizations."
  },
  {
    url: "https://www.zebra.com/us/en.html",
    company: "Illinois Business Consulting",
    img: ibcLogo,
    position: "Consultant",
    tenure: "September 2021 - January 2022",
    description: "Conducted market entry research for a chemical battery additive manufacturer in East Asia."
  }
]

function App() {

  document.title = "Rohan Vanjani";

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="container" 
          style={{width: "450px"}} >
            <h1 className="typed-out">
              Rohan Vanjani
            </h1>
        </div>

        <div style={{display: "flex", justifyContent: "space-evenly", width: "200px", paddingBottom: "50px"}}>
          {icons.map((icon) => (
            <Link href = {icon.link} isExternal>
              <Icon 
                as={icon.type} 
                color="orange" boxSize={30} 
                _hover={{ color: "white" }}
              />
            </Link>
          ))}
        </div>

        <div className="image-cropper">
          <img className="rounded" src={profilePic} alt=""/>
        </div>

        <div style ={{width: '700px', align: "left", fontSize: "22px", marginTop: "20px", marginBottom: "40px"}} >
          <p>
            Hello! My name is Rohan Vanjani, and I am a sophomore at the <em className="sp-text">University of Illinois at Urbana-Champaign </em>
            currently pursuing a <i>B.S.</i> in <em className="sp-text">Computer Science & Mathematics</em>. I have a passion for programming 
            and building robust full-stack applications. I am currently seeking opportunities related to <em className="sp-text">Software Engineering</em>, 
            Web Development, and Product Development. On campus, I am currently <em className="sp-text">Software Developer</em> for <a className="sp-text" href="https://uiuc.hack4impact.org/">Hack4Impact</a>,
            where we build full-stack applications for local nonprofits. Additionally, I served as the past <em className="sp-text">Technology Chair</em> for 
            <em className="sp-text"> Alpha Kappa Psi</em>, a professional business fraternity on campus. Outside of school, I am an avid tutor and also enjoy 
            weightlifting, investing, and watching basketball. 
          </p>
        </div>
        
        <h1 style={{marginTop: "60px"}}>Experience</h1>

        <div className="experiences-container">
            {experiences.map((data) => (
              <div className="experience">
                <div className = "company-photo">
                  <img className="company-image" src={data.img} alt=""></img>
                  <p style={{fontSize: "25px", fontWeight: "bold"}}>{data.company}</p>
                </div>
                <div style={{width: "100px", backgroundColor: "white", height: "2px", marginLeft: "38%"}}></div>
                <p style={{fontSize: "20px"}} >{data.position}</p>
                <p style={{fontSize: "15px", color: "orange"}}>{data.tenure}</p>
                <p style={{fontSize: "20px", textAlign: "left", width: "90%", marginLeft: "30px", marginTop: "40px"}}>{data.description}</p>
              </div>
            ))}
        </div>

        <div className="download-link">
          <a className="dl-link" href={resume} download="Rohan_Vanjani_Resume">Download My Resume</a>
        </div>

        
      </header>
    </div>
  );
}

export default App;
