import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MenuRoute } from './MenuRoute';
import { BasicItem } from './BasicItem';
import { DetailsRoute } from './DetailsRoute';
import { SearchRoute } from './SearchRoute';
import { Header } from './Header'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <Header></Header>
    
    <Routes> 
     <Route path='/' element={<MenuRoute/>}/>
     <Route path='/search' element={<SearchRoute/>}/>
     <Route path='/details/:id' element={<DetailsRoute/>}/>
     <Route path='/*' element={<Navigate to='/'/>}/>
     
  
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
