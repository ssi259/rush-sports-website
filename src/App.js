import './App.css';
import Body from '../src/components/Body'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from '../src/components/About'
import ContactUs from '../src/components/ContactUs'
import Policies from '../src/components/Policies'
import Footer from '../src/components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>}></Route>
          <Route path = "/about" element={<About/>}></Route>
          <Route path = "/contactUs" element={<ContactUs/>}></Route>
          <Route path = "/policies" element={<Policies/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
