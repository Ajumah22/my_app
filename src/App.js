// import logo from './logo.svg';
// import HelloWorld from './components/Welcome';
// import Profile from './components/Profile';

import './App.css';
import './components/Card.css';
import Card from './components/Card';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/home';
import AboutUs from './Pages/aboutUs';
import ContactUs from './Pages/contactUs';
import ApplicationForm from './Pages/applicationForm';
import Gallery from './Pages/gallery';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Header />

        <Routes>
          <Route path = "/home" element = {<Home />}/>
          <Route path = "/applicationForm" element = {<ApplicationForm />}/>
          <Route path = "/aboutUs" element = {<AboutUs />}/>
          <Route path = "/contactUs" element = {<ContactUs />}/>
          <Route path = "/gallery" element = {<Gallery />}/>
        </Routes>
        
        <Footer />
    </BrowserRouter>

  )
}

export default App;
