import styles from "./ProjectsStyles.module.css";
import bloggify from "../../../public/bloggify.jpg";
import youtube from "../../../public/youtube.jpg";
import movies from "../../../public/movies.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bloggify}
          link="https://bloggify-test.vercel.app/"
          h3="Bloggify"
          p="A Blogging Platform"
        />
        <ProjectCard
          src={youtube}
          link="https://youtube-video-download-abir.vercel.app/"
          h3="YouTube Downloader"
          p="Download any Video"
        />
        <ProjectCard
          src={movies}
          link="https://movie-details-next14.vercel.app/"
          h3="Movies App"
          p="Get Movie Details"
        />
      </div>
    </section>
  );
}

export default Projects;
