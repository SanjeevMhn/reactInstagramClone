import React from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Search from './components/Search';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import "./App.css";

const App = () => {

  return (
    <>
      <Layout>
        <Outlet/>
      </Layout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  )
}

export default App;