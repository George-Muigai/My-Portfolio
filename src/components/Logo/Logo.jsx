import './logo.css'
import { Images } from '../../assets/Assets'

const Logo = () => {
  return (
    <div className='logo'>
        <h1>GeorgE</h1>
        <div className="img">
            <img src={Images.pattern} alt="" />
        </div>
    </div>
  )
}

export default Logo