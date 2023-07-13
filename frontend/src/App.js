import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import PageNotFound from './Pages/PageNotFound';


const App = () => {

 
 
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<SignIn />} />
        
        <Route
          path="/"
          element={<Dashboard />}
        />
       
        {<Navigate to="/" />}
        <Route path="/" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
