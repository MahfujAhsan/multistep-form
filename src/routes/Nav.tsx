import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';
import Home from '../pages/Home';
import PersonalInfo from '../pages/PersonalInfo';

const Nav = () => {
    return <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/personalInfo' element={<PersonalInfo />}/>
        <Route path='*' element={<Error />}/>
    </Routes>
    </BrowserRouter>
};

export default Nav;