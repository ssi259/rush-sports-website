import '../App.css';
import logo from '../logo.svg';

function Body(){
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
          for For?</div></h3>
      </div>
    );
}
export default Body