import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Footer(){
    return(<div className='fixed-bottom footer'>
        <ul className='nav-ul'>
            <li><Link to = "/about" >About</Link></li>
            <li><Link to = "/contactUs" >Contact Us</Link></li>
            <li><Link to = "/policies" >Cancellation & Refund Policy</Link></li>
            <li><Link to = "/policy" >Privacy Policy</Link></li>

        </ul>
    </div>)
}
export default Footer