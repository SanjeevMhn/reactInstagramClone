import React from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Search from './components/Search';
import { Routes, Route, Link, Outlet, Router } from 'react-router-dom';
import "./App.css";

const App = () => {

  return (
    <>
      <Routes>
            <Route path="/" element={<Layout><Home/></Layout>} />
      </Routes>
    </>
  )
}

export default App;