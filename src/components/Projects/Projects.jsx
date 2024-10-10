import { FaGithub, FaLink } from 'react-icons/fa'
import { Images } from '../../assets/Assets'
import './projects.css'
import OtherProjects from './OtherProjects'

import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='projects'>
        <div className="project-title">
            <h2>My Projects <img src={ Images.pattern } alt="pattern" /></h2>
        </div>

        <div className="project-section">
            {/* Project One */}
            <motion.div
                initial={{transform: "translateX(-100%)"}}
                whileInView={{transform: "translateX(0)"}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
            className="project">
                <div className="project-left">
                    <div className="img">
                        <img src={ Images.project_1 } alt="project 1" />
                    </div>
                </div>
                <div className="project-right">
                    <p>Featured Project</p>
                    <a className='p-title' href="#" target='_blank'>Landing Page</a>
                    <p className='desc'>A simple landing page web app built to capture leads and boost conversions. 
                        It&apos;s responsive, easy to use, and helps track performance effectively.
                    </p>
                    <div className='project-tech'>
                        <span>React</span>
                        <span>Tailwind Css</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/George-Muigai"><FaGithub color='#d6d5d5' /></a>
                        <a href="https://github.com/George-Muigai"><FaLink color='#d6d5d5' /></a>
                    </div>
                </div>
            </motion.div>

            {/* Project Two */}
            <motion.div
                initial={{transform: "translateX(-100%)"}}
                whileInView={{transform: "translateX(0)"}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
            className="project reversed">
                <div className="project-left">
                    <div className="img">
                        <img src={ Images.project_2 } alt="project 1" />
                    </div>
                </div>
                <div className="project-right">
                    <p>Featured Project</p>
                    <a className='p-title' href="#">Facebook Clone</a>
                    <p className='desc'>A simple landing page web app built to capture leads and boost conversions. 
                        It&apos;s responsive, easy to use, and helps track performance effectively.
                    </p>
                    <div className='project-tech'>
                        <span>React</span>
                        <span>Tailwind Css</span>
                        <span>Mongo Db</span>
                        <span>Rest Api</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/George-Muigai"><FaGithub color='#d6d5d5' /></a>
                        <a href="https://github.com/George-Muigai"><FaLink color='#d6d5d5' /></a>
                    </div>
                </div>
            </motion.div>

            {/* Project Three */}
            <motion.div
                initial={{transform: "translateX(-100%)"}}
                whileInView={{transform: "translateX(0)"}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
            className="project">
                <div className="project-left">
                    <div className="img">
                        <img src={ Images.project_3 } alt="project 1" />
                    </div>
                </div>
                <div className="project-right">
                    <p>Featured Project</p>
                    <a className='p-title' href="#" target='_blank'>Movie Dashboard</a>
                    <p className='desc'>A simple landing page web app built to capture leads and boost conversions. 
                        It&apos;s responsive, easy to use, and helps track performance effectively.
                    </p>
                    <div className='project-tech'>
                        <span>React</span>
                        <span>Tailwind Css</span>
                        <span>TMDB Api</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/George-Muigai"><FaGithub color='#d6d5d5' /></a>
                        <a href="https://github.com/George-Muigai"><FaLink color='#d6d5d5' /></a>
                    </div>
                </div>
            </motion.div>

            {/* Project Four */}
            {/* <div className="project reversed">
                <div className="project-left">
                    <div className="img">
                        <img src={ Images.project_4 } alt="project 1" />
                    </div>
                </div>
                <div className="project-right">
                    <p>Featured Project</p>
                    <a className='p-title' href="#">Product Page</a>
                    <p className='desc'>A simple landing page web app built to capture leads and boost conversions. 
                        It&apos;s responsive, easy to use, and helps track performance effectively.
                    </p>
                    <div className='project-tech'>
                        <span>React</span>
                        <span>Tailwind Css</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/George-Muigai"><FaGithub color='#d6d5d5' /></a>
                        <a href="https://github.com/George-Muigai"><FaLink color='#d6d5d5' /></a>
                    </div>
                </div>
            </div> */}

        </div>

        <OtherProjects />
    </div>
  )
}

export default Projects