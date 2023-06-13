import React from "react";
import "/Users/rohan_v/Documents/Projects/Personal Website/rohanvan123.github.io/my-website/src/App.css";

import { Icon } from "@chakra-ui/icons";
import { RxDot } from "react-icons/rx";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "@chakra-ui/react";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const experiences = [
  {
    url: "https://www.zebra.com/us/en.html",
    company: "Zebra Technologies",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABeCAMAAACqwpxoAAAAbFBMVEX///8AAAh/f4MPDxcvLzY/P0WkpKe/v8EFBQ2vr7IfHyaPj5OWlpkJCRHPz9GHh4tfX2R3d3vv7/DIyMrf3+Bvb3T29vZPT1VoaG0ZGSA3Nz1aWl+6urwpKTDb29wVFRynp6o1NTtKSlA+PkTQam/HAAADQklEQVRYhe3Y27qqIBAAYNDy2EHNtHOt1vu/42ZmQEUOUnf7+9bcZMWfQKMMMuaK4nxNnV8uRME575vQ1t1tbvmqC6N5wfdzy6ugk56g6QST5bsAe9hyHUtbh5w4nWFp3yF2jqVdLagun+JIs78L9sQTfD3EkyFKe/TTXDTZGFhaf2512MrAZNf+0+4ybsNon63fstyKwd4fC9SBC34vQ7JZw7snzVJcQCxfh1aMsb15VG7iaGJ5ljttnZlYsx685jKpcszIeLD3lYof13V45gpjOo8WQHpyD1YEdjVRXZhb7sU0psRlvTgZsdUGYrvldYVhTZKNwg4b1ZQkXuyyLADHLhuCndaBUx07LDs2ELNr8plr2GJL+Ci2/VWxTPX9grX9zzHXsNvyq8Vq2GPNWzV8OME+a9xv8c424o8sTbDE0bKN1iJeEtO1kNHbetH2MvmnWL7dh1k7DrTyjmriEEsfmzhSaeyzQ4Gg42j4brgAWhF5LCIbbMZseF62yHhwLQr2CS40OynbAvBes4fJN0lm4FmB1N0nVL8mcwPPi6t27PV7dg/RFtI0thRmzZXkdj4VZvFgKeoe+6o/Jba6eoaXCkIfXioIfXipuvLiT+M/xTKdy+WWbmxmTzj+LDd0/KVF/K0F/LUV+HvL0sv3li1vF/7iL/4C45bLaB/y4Mbo6IYbwRQPD2q9bbCppGo13rblUIWonejzRdsmEdmVFk5sJMvhH2WPzLRQVazVIT2QusDhGWl7FFHBaRu0lXgboU02bywrhI2rfisXipZ+Z9yxwBYmou7QSMA2WM2twYr71o5T1V+qTspoxY8+G9N2W2hPFjbKa+ryaqU6zeB5Dq09YHuxbazRbvYX7BzZls4LL1E0droVy965G/szmauC5vkZneDZQ0JNdrux05VaL02bXbtxnn+pywUWh1RNQolZdMq+0jQ9oE0PZSbnGRe2uqMuF1VVcFkS9lzVcsY89zApMN5+MiNDOtDk35ndXmDTA/YhehC3MjHUwBiDBHjCY4w9Wnis8UZb1zDSC81zjdMMXe7FoNIeO52q38laa07mZBuY57TEDxg9ajuOvTha5jn7of9oRXuw+6+YNpxVyJriH8/fK5nAoJKhAAAAAElFTkSuQmCC",
    position: "Software Engineer Intern",
    tenure: "May 2022 - August 2022",
    description:
      "Developed Python programs to diagnose faulty label printers using data compiled on Google Cloud.",
  },
  {
    url: "https://uiuc.hack4impact.org/",
    company: "Hack4Impact UIUC",
    img: "https://ashayp.com/images/h4i.jpeg",
    position: "Software Developer",
    tenure: "September 2022 - Present",
    description:
      "Building public-facing web and mobile applications for nonprofit organizations.",
  },
  {
    url: "https://giesbusiness.illinois.edu/experience/experiential-learning/illinois-business-consulting",
    company: "Illinois Business Consulting",
    img: ibcLogo,
    position: "Consultant",
    tenure: "September 2021 - January 2022",
    description:
      "Conducted market entry research for a chemical battery additive manufacturer in East Asia.",
  },
  {
    url: "https://www.akpsiuiuc.biz/",
    company: "Alpha Kappa Psi",
    img: "https://static.wixstatic.com/media/80b5eb_8a28ade9791846ca96f725fa47152ce3~mv2.png/v1/fill/w_400,h_384,al_c/80b5eb_8a28ade9791846ca96f725fa47152ce3~mv2.png",
    position: "Technology Chair",
    tenure: "September 2021 - Present",
    description:
      "Updated the Epsilon Chapter website to make a more detailed but user-friendly design, displaying both recruitment and promotional content.",
  },
  {
    url: "https://siteinnovator.com/",
    company: "SiteInnovator",
    img: "https://pbs.twimg.com/profile_images/1253312931946803200/F9wKZuhw_400x400.jpg",
    position: "Web Developer",
    tenure: "May 2019 - February 2021",
    description:
      "Designed websites for local businesses with WordPress to help expand their online presence.",
  },
];

const CustomSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      renderDotsOutside={true}
      swipeable={true}
      draggable={true}
    >
      {experiences.map((data) => (
        <div className="experience">
          <div className="company-photo">
            <img className="company-image" src={data.img} alt=""></img>
            <Link
              href={data.url}
              textDecoration="none"
              color="white"
              isExternal
              _hover={{ color: "orange" }}
            >
              <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                {data.company}
              </p>
            </Link>
          </div>
          <div
            style={{
              width: "100px",
              backgroundColor: "white",
              height: "2px",
              marginLeft: "38%",
            }}
          ></div>
          <p style={{ fontSize: "20px" }}>{data.position}</p>
          <p style={{ fontSize: "15px", color: "orange" }}>{data.tenure}</p>
          <p
            style={{
              fontSize: "20px",
              textAlign: "left",
              width: "90%",
              marginLeft: "30px",
              marginTop: "40px",
            }}
          >
            {data.description}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export { CustomSlider };
