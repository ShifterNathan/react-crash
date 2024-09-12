import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards.jsx'
import JobListings from './components/JobListings.jsx'
import ViewAllJobs from './components/ViewAllJobs.jsx'

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  )
}

export default App