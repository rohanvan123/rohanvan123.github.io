import React, { FC } from "react";
import Project from "../types/types.ts";
import ProjectCard from "./ProjectCard.tsx";
import { useMobile } from "../hooks/useMobile.ts";

interface ProjectContainerProps {
  projectList: Project[];
}

const ProjectContainer: FC<ProjectContainerProps> = ({ projectList }) => {
  const { isMobile } = useMobile();
  if (isMobile) {
    return (
      <div className="project-container-mobile">
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
  } else {
  }
  return (
    <div className="project-container-desktop">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {projectList.map(
          (project: Project, idx: number) =>
            idx % 2 === 0 && (
              <ProjectCard
                key={idx}
                projectName={project.title}
                description={project.description}
                tech={project.tech}
                imgUrl={project.imageURL}
                link={project.link}
              />
            )
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {projectList.map(
          (project: Project, idx: number) =>
            idx % 2 !== 0 && (
              <ProjectCard
                key={idx}
                projectName={project.title}
                description={project.description}
                tech={project.tech}
                imgUrl={project.imageURL}
                link={project.link}
              />
            )
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
