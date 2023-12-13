import React from 'react'
import Scrollbar from '../components/header & footer/header/scrollbar'
import Home from '../components/landingpage/home/home'
import About from '../components/landingpage/about/about'
import Project from '../components/landingpage/projects/project'
import Galery from '../components/landingpage/galery/galery'
import Contact from '../components/landingpage/contact/contact'
import Footer from '../components/header & footer/footer/footer'
import Blog from '../components/landingpage/blog/blog'
import Process from '../components/landingpage/workflow/process'

export default function LandingPage() {
  return (
    <>
      <Scrollbar/>
      <Home/>
      <About/>
      <Project/>
      <Process/>
      <Galery/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  )
}
