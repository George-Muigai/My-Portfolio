import './about.css'
import { Images } from '../../assets/Assets'
import { FaArrowRight } from 'react-icons/fa'

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h2>About Me <img src={ Images.pattern } alt="pattern" /></h2>
            {/* <img src={ Images.pattern } alt="pattern" /> */}
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={ Images.profile } alt="" />
            </div>
            <div className="about-right">
                <div className="about-p">
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. 
                        Throughout my career, I have had the privilege of collaborating with prestigious organizations, 
                        contributing to their success and growth.
                    </p>
                    <p>Here are the technologies i&apos;ve been working with</p>
                </div>
                <div className="skills">
                    <span><FaArrowRight color='#b415ff'/> React js</span>
                    <span><FaArrowRight color='#b415ff'/> Javascript</span>
                    <span><FaArrowRight color='#b415ff'/> Php</span>
                    <span><FaArrowRight color='#b415ff'/> Mongo db</span>
                    <span><FaArrowRight color='#b415ff'/> Java (android)</span>
                    <span><FaArrowRight color='#b415ff'/> Node js</span>
                    <span><FaArrowRight color='#b415ff'/> MySql</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About