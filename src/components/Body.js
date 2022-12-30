import '../App.css';
import logo from '../logo.svg';
import playstore from '../playstore.png';
import image from '../phone-image.png';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ContactModal from './ContactModal';
import { useState } from 'react';


function Body(){
  const [openModal, setOpenModal] = useState(false);

    return(
    <div className="background-image">
      <div className='logo'>
      </div>
      <img src={logo} className="app-logo" alt="logo" />
      <h1 className='heading'>Join Rush to learn from Pros</h1>
      <h3>
        <div className='text'>Rush App brings classes of your favorite sports run by<br /> 
          professional athletes to arenas near you! Thousands of players<br />
          have taken their game to the next level, What are you waiting<br />
          for For?
        </div>
      </h3>
      <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Contact Us
          </button>
        {openModal && <ContactModal closeModal={setOpenModal} />}
      <div>
          <a href="https://play.google.com/store/apps/details?id=in.rushsports.playerapp" target="_blank" rel="noreferrer">
          <img src = {playstore} className = "play-store1" />
        </a>
      </div>
      <div>
        <img src = {image} className = "phone-image" />
      </div>
      <div className='download-section'>
        <h1>Get Rush App today</h1>
        <h4 className='download-section-text'>It takes 30 seconds to sign up. Download the app and create<br/> an account today and we’ll show you nearby sports classes <br/> from best coaches.</h4>
      </div>
        <div>
          <a href="https://play.google.com/store/apps/details?id=in.rushsports.playerapp" target="_blank" rel="noreferrer">
            <img src={playstore} className="play-store2" />
          </a>
        </div>
    </div>
    );
}
export default Body