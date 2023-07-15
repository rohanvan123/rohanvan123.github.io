import React, { FC } from "react";
import Project from "../types/types.ts";
import ProjectCard from "./ProjectCard.tsx";
import { useMobile } from "../hooks/useMobile.ts";

interface ProjectContainerProps {
  projectList: Project[];
}

const ProjectContainer: FC<ProjectContainerProps> = ({ projectList }) => {
  const { isMobile } = useMobile();
  return (
    <div
      className={
        isMobile ? "project-cotainer-mobile" : "project-container-desktop"
      }
    >
      {projectList.map((project: Project, idx: number) => (
        <ProjectCard
          key={idx}
          projectName={project.title}
          description={project.description}
          tech={project.tech}
          imgUrl={project.imageURL}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectContainer;
