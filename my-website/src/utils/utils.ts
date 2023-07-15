import Project from "../types/types";

const parseProjects = (data: any): Project[] => {
  const projects: Project[] = [];
  for (let i = 0; i < data.length; i++) {
    const p: Project = {
      title: data[i].title,
      description: data[i].description,
      tech: data[i].tech,
      imageURL: data[i].imageUrl,
      link: data[i].link,
    };
    projects.push(p);
  }

  return projects;
};

export default parseProjects;
