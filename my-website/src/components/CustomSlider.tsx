import React, { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../App.css";
import experiences from "../data/experiences.ts";
import { Link } from "@chakra-ui/react";

const useMobile = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
};

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

console.log(experiences);

const CustomSlider = () => {
  const { isMobile } = useMobile();
  return (
    <div
      className={
        isMobile ? "experiences-container-mobile" : "experiences-container"
      }
    >
      <Carousel
        responsive={responsive}
        showDots={true}
        renderDotsOutside={true}
        swipeable={true}
        draggable={true}
      >
        {experiences.map((data, idx) => (
          <div
            key={idx}
            className={isMobile ? "experience-mobile" : "experience"}
          >
            <div className="company-photo">
              <img className="company-image" src={data.img} alt=""></img>
              <Link
                href={data.url}
                textDecoration="none"
                color="white"
                isExternal
                _hover={{ color: "orange" }}
                style={{ fontSize: "25px", fontWeight: "bold" }}
              >
                {data.company}
              </Link>
            </div>
            {isMobile ? (
              <div
                style={{
                  width: "100px",
                  backgroundColor: "white",
                  height: "2px",
                  marginTop: "30px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
            ) : (
              <div
                style={{
                  width: "100px",
                  backgroundColor: "white",
                  height: "2px",
                  marginTop: "30px",
                }}
              ></div>
            )}
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              {data.position}
            </p>
            <p style={{ fontSize: "15px", color: "orange", marginTop: "10px" }}>
              {data.tenure}
            </p>
            {isMobile ? (
              <div
                style={{
                  fontSize: "20px",
                  textAlign: "left",
                  width: "90%",
                  marginTop: "40px",
                  marginLeft: "atuo",
                  marginRight: "auto",
                }}
              >
                {data.description}
              </div>
            ) : (
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "left",
                  width: "90%",
                  marginTop: "40px",
                }}
              >
                {data.description}
              </p>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomSlider;
