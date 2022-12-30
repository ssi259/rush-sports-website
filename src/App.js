import './App.css';
import Body from '../src/components/Body'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from '../src/components/About'
import ContactUs from '../src/components/ContactUs'
import Policies from '../src/components/Policies'
import Footer from '../src/components/Footer'
import Policy from './components/Policy';
import TnC from './components/tnc';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>}></Route>
          <Route path = "/about" element={<About/>}></Route>
          <Route path = "/contactUs" element={<ContactUs/>}></Route>
          <Route path = "/policies" element={<Policies/>}></Route>
          <Route path = "/policy" element={<Policy/>}></Route>
          <Route path = "/tnc" element={<TnC/>}></Route>
        </Routes>
        <div>
        <ul className='nav-ul'>
          <Footer/>
        </ul>
      </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
