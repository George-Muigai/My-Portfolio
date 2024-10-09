import { FaFolder, FaLink } from "react-icons/fa"
import Projects from "../../assets/Projects"

const OtherProjects = () => {
  return (
    <div className="other-p">
        <h2>Other Noteworthy Projects</h2>

        <ul className="grid-items">
        { Projects.map((project, index) => (
            <li key={index} className="project-2">
            <div className="p2-top">
                <FaFolder className="fa-icon" size={"25px"}/>
                <FaLink className="p2-link" size={"25px"}/>
            </div>
            <h3 className="p2-title"> <a href="#">{project.title}</a></h3>
            <div className="p2-desc">
                <p>{project.description}</p>
            </div>
            <div className="p2-tech">
                {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>
        </li>
        )) }
        </ul>
    </div>
  )
}

export default OtherProjects