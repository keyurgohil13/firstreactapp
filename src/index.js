import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import App from './App';
// import Header from '../src/components/Header';
import Header from './components/Heder/Header';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';
import CounterFun from './components/CounterFun';
import ManageForm from './components/ManageForm';
import Register from './components/Register';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import { BrowserRouter } from 'react-router-dom';
// import Gallery from './components/Gallery';
// import Title from './components/Title';

const root = ReactDOM.createRoot(document.getElementById('root'));
const lists = ["Home", "About"];
root.render(

    <>
        <BrowserRouter >
          <App />
        </BrowserRouter>
        {/* <Header logo="images/logo2.png" dropdown="Pages" list = {lists}/> */}
        {/* <Header logo="images/logo.png" dropdown="Shop"/> */}
        {/* <Counter/> */}
        {/* <HoverCounter /> */}
        {/* <CounterFun /> */}
        {/* <ManageForm /> */}
        {/* <Register /> */}
    </>
);

