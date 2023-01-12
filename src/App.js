import React from 'react'
import Header from './components/Heder/Header';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import { Route, Routes } from 'react-router-dom';
import CRUD from './components/CRUD/CRUD';
import View from './components/View/View';
import Error from './components/Error/Error';
import AddEmployee from './components/AddEmployee/AddEmployee';
import EmployeeView from './components/EmployeeView/EmployeeView';
function App() {
  return (
    <>
        <Header />
    <Routes>

        <Route path='/' element={ <Home />}/>
        <Route path='/features' element={ <Features />}/>
        <Route path='/view' element={ <View />}/>
        <Route path='/addEmployee' element={ <AddEmployee />}/>
        <Route path='/empview' element={ <EmployeeView />}/>
        <Route path='*' element={ <Error />}/>
    </Routes>
           
    </>
  )
}

export default App