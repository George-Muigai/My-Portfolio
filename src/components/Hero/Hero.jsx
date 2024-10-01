import { Images } from '../../assets/Assets'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={Images.profile} alt="" />
        <h1> <span> I&apos;m George Muigai, </span> web and android developer based in Kenya.</h1>
        <div className="resume-btn">My Resume</div>
    </div>
  )
}

export default Hero