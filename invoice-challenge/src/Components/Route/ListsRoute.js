import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../HomePage/Home';


export default function ListsRoute() {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>} />
        </Routes>
    ); 
}

