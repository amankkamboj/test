import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllMeetupPages from './pages/AllMeetup';
import NewMeetupPage from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
const App = () => {
  return (
  <>
  
  <Router>
  <MainNavigation />
  <Routes> 
  <Route path='/' element={<AllMeetupPages />}>
  </Route>
  <Route path='/new-meetup' element={<NewMeetupPage />}>
  </Route>
  <Route path='/favorities' element={<Favorites />}>    
  </Route>
  </Routes>
  </Router>
  </>    
  )
}

export default App;
