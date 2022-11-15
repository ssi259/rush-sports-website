import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Footer(){
    return(<div>
            <li><Link to = "/about" >About</Link></li>
            <li><Link to = "/contactUs" >Contact Us</Link></li>
            <li><Link to = "/policies" >Cancellation & Refund Policy</Link></li>
            <li><a href = "https://drive.google.com/file/d/1Zjdtkv5P-nk_rqmQmmP_ceZa35a6BkkP/view?usp=sharing">Privacy Policy</a></li>
            <li><a href = "https://drive.google.com/file/d/1vrVVGrhS95CZ7oqbLmoG4Z-YfdOIE9e5/view?usp=sharing">Terms And Conditions</a></li>
            <li><Link to = "/" >Home</Link></li>
    </div>)
}
export default Footer