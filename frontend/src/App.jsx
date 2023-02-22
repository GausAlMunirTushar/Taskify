import React, { Fragment } from 'react';
import {BrowserRouter, Route, Routes, } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';
import New from './pages/New';
import Progress from './pages/Progress'
import Completed  from './pages/Completed';
import Canceled from './pages/Canceled'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Registration from './pages/Registration';
import ForgetPass from './pages/ForgetPass'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Dashboard/>} />
				<Route exact path='/Create' element={<Create/>} />
				<Route exact path='/All' element={<New/>} />
				<Route exact path='/Progress' element={<Progress/>} />
				<Route exact path='/Completed' element={<Completed/>} />
				<Route exact path='/Canceled' element={<Canceled/>} />
				<Route exact path='/Profile' element={<Profile/>} />
				<Route exact path='/Login' element={<Login/>} />
				<Route exact path='/Registration' element={<Registration/>} />
				<Route exact path='/ForgetPass' element={<ForgetPass/>} />
				<Route path='*' element={<NotFound/>} />
			</Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App