import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,  
} from 'react-router-dom';
// Elements imports
import Home from '../pages/home/';
import Users from '../pages/users/';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/companies" element={<h1>Companies</h1>} />
        <Route path="/actives" element={<h1>Actives</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
