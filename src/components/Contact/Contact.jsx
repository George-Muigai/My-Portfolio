import { Images } from '../../assets/Assets';
import './contact.css'

const Contact = () => {
    return(
        <div className="contact">
            <div className="contact-title">
                <h2>Get In Touch <img src={Images.pattern} alt="pattern" /></h2>
            </div>
            <div className="p">
                <p>I&apos;m currently available to take on new projects, so feel free to send me a message about 
                anything that you want me to work on. You can contact anytime.
                </p>
            </div>
            <div className="contact-btn">
                <a href="mailto:muigaigeorge452@gmail.com" target='_blank'>Say Hello</a>
            </div>
        </div>
    )
}

export default Contact;