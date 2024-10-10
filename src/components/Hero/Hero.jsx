import { Images } from '../../assets/Assets'
import './hero.css'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
      transition={{duration: 0.5}}
    className='hero'>
        <img src={Images.profile} alt="" />
        <h1> <span> I&apos;m George Muigai, </span> web and android developer based in Kenya.</h1>
        <div className="resume-btn">My Resume</div>
    </motion.div>
  )
}

export default Hero