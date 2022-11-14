import React from 'react';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Nav from '../Navigation/Navigation';
import Dialogs from '../Dialogs/Dialog';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

//компонента - функция которая возвращает разметку
const App = () =>
  <Router basename='React-App'>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/messages' element={<Dialogs />} />
        </Routes>
      </div>
    </div>
  </Router>


export default App;
