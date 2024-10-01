import Logo from "../Logo/Logo"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <Logo />

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <a className='connect' href="#contact">Connect With Me</a>
    </div>
  )
}

export default Navbar