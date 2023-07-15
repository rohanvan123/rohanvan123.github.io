import React, { FC, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import "../App.css";
import { useMobile } from "../hooks/useMobile.ts";

interface ProjectCardProps {
  projectName: string;
  description: string;
  tech: string[];
  imgUrl: string;
  link: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  projectName,
  description,
  tech,
  imgUrl,
  link,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const { isMobile } = useMobile();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className={isMobile ? "project-card-mobile" : "project-card-desktop"}>
      <a
        href={link}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovering && (
          <FiExternalLink
            className="external-link-icon"
            width={"50px"}
            height={"50px"}
          />
        )}
        <img src={imgUrl} alt="" className="project-image" />
      </a>
      <div className="project-text-content">
        <div className="project-title">{projectName}</div>
        <span className="project-description">{description}</span>
        <div className="tech-list">
          {tech.map((item, idx) => (
            <div className="tech-item" key={idx}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
