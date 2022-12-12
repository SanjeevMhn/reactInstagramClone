import React from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Search from './components/Search';
import { Routes, Route, Link, Outlet, Router } from 'react-router-dom';
import { QueryClient,QueryClientProvider,useQuery } from 'react-query';
import "./App.css";

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
            <Route path="/" element={<Layout><Home/></Layout>} />
            <Route path="/search" element={<Layout><Search/></Layout>} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App;