import { useState, useEffect } from 'react';
import { inject } from '@vercel/analytics';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import {Circles} from 'react-loader-spinner'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Components/Header';
import Index from './Index';
import About from './About';
import Skill from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Components/Footer';

function App() {
  inject();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    // Simulate an API call or other asynchronous tasks
    setTimeout(() => {
      setLoading(false); // Set loading to false after tasks are completed
    }, 2000); // Simulated 2 seconds delay, adjust as needed
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="loader-container">
        <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
        <div className="loader-text">Loading...</div> 
        
      
      </div>
      ) : (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Index />} />
              <Route path="about" element={<About />} />
              <Route path="skills" element={<Skill />} />
              <Route path="education" element={<Education />} />
              <Route path="experience" element={<Experience />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
