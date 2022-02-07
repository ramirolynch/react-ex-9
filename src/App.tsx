import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Link, Outlet } from 'react-router-dom';
import { MenuRoute } from './MenuRoute';
import { SearchRoute } from './SearchRoute';

function App() {
  return (

    <div className="App"> 

        <MenuRoute></MenuRoute>
        <SearchRoute></SearchRoute>
  

    </div>
  );
}

export default App;
