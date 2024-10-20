import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <h3>Here are the projects</h3>
      <div className="flex gap-6">
        {" "}
        {[
          { projName: "ecommerce", link: "projects/project2" },
          { projName: "Weather-App", link: "projects/project1" },
          { projName: "TODO", link: "projects/project3" },
        ].map((proj, index) => {
          return (
            <div key={index}>
              <Link href={proj.link}>{proj.projName}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
