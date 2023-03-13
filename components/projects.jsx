import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [sortOption, setSortOption] = useState("stars"); // Default sort by most stars

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch(
        `https://api.github.com/users/xXA2005/repos?sort=${
          sortOption === "stars" ? "stars" : "updated"
        }&direction=desc`
      );
      const data = await res.json();
      setProjects(data);
    };

    getProjects();
  }, [sortOption]);

  const handleSortToggle = () => {
    setSortOption(sortOption === "stars" ? "updated" : "stars");
  };

  return (
    <>
    <div className="flex flex-col pt-48" id="projects">
      <div className="flex items-center justify-center p-4">
        <button
          className="rounded-lg py-2 px-4 font-medium mr-4 glow-white border"
          onClick={handleSortToggle}
        >
          Sort by {sortOption === "stars" ? "Last Modified" : "Most Stars"}
        </button>
      </div>
      <div className="gap-4 flex-wrap flex justify-center items-center">
        {projects.slice(0, 9).map((project) => (
          <div
            key={project.id}
            className="w-60 h-60 p-2 glow-blue border rounded-lg"
          >
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{project.name}</h2>
              <p className="text-gray-700">{project.description}</p>
              <a
                href={project.html_url}
                className="mt-4 block text-sm font-medium text-blue-500 hover:text-blue-600"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Projects;