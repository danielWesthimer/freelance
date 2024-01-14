

import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import Main from './components/Main';
import Enter from './components/Enter';
import Register from './components/Register';
import Lobby from './components/Lobby';
import Revenue from './components/Revenue';
import Expense from './components/Expense';
import Added from './components/Added';

function MainRoure() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/enter' element={<Enter />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Main />} >
                    <Route path='/lobby' element={<Lobby />} />
                    <Route path='/revenue' element={<Revenue />} />
                    <Route path='/expense' element={<Expense />} />
                    <Route path='/add' >
                        <Route path=':type' element={<Added />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>);

}
export default MainRoure;