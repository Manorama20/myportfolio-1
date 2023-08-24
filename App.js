import React from "react"
import Header from "./Component/Head/Header"
import Home from "./Component/Hero/Home"
import Features from "./Component/Features/Features"
import Porfolio from "./Component/Porfolio/Porfolio"
import Resume from "./Component/Resume/Resume"
import Testionial from "./Component/Testimonial/Testimonial"
import Blog from "./Component/Blog/Blog"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer"
import "./App.css" 
 

const App = () => {
  return   (
    <>
      <Header />
      <Home />
      <Features />
      <Porfolio />
      <Resume />
      <Testionial />
      <Blog />
      <Contact />
      <Footer />
   </>
 ) 
}


export default App