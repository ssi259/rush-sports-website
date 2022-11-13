import {Link} from 'react-router-dom'
function Footer(){
    return(<div className='footer'>
        <ul className='nav-ul'>
            <li><Link to = "/about" >About</Link></li>
            <li><Link to = "/contactUs" >Contact Us</Link></li>
            <li><Link to = "/policies" >Policies</Link></li>
        </ul>
    </div>)
}
export default Footer