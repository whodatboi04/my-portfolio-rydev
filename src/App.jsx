import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from "react-router-dom";
import Portfolio from './_portfolio/portfolio';
import Footer from './Components/Footer';
import { Infinity } from 'ldrs/react'
import 'ldrs/react/Infinity.css'


function App() {
  const [loader, showLoader] = useState(true);
  
  useEffect(() => {
      const timer = setTimeout(() => {
          showLoader(false);
      }, 3000); 

      return () => clearTimeout(timer); 
  }, []);

  const [mode, setMode] = useState(() =>{
          const savedMode = localStorage.getItem('dark');
          return savedMode === 'true';
      });
  
  useEffect(() => {
      if(mode){
          document.documentElement.classList.add("dark");
          localStorage.setItem('dark', mode);
      }else{
          document.documentElement.classList.remove("dark");
          localStorage.removeItem('dark', mode);
      }

    
  }, [mode]);


  
  return (
    loader ? (
      // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className='flex justify-center items-center h-screen w-screen bg-tWhite dark:bg-dark'>
        <Infinity  
          width={200}
          {...(mode ? { color: 'white' } : { color: 'black' })}
        />
      </div>
    ) : (
      <Router>
        <Navbar />
        <Portfolio />
        <Footer />
      </Router>
    )
  );
}

export default App
