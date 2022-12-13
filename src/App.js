
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import Landing from './pages/landing/Landing';
import { userInput, productInputs } from './formSource';
import './style/dark.scss';
import { useState } from 'react';
import { DarkMode } from '@mui/icons-material';
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from 'react';
import Edit from './pages/edit/Edit';

function App() {

  const {darkMode}= useContext(DarkModeContext)

 
  return (
    <div className={darkMode ? 'app dark' : ' app'}>
<BrowserRouter>
<Routes>
<Route path='/' element={<Login/>}/>
<Route path ='home' element={<Home/>} />

<Route path= "Register" element={<Register/>}/>
<Route path='activos'>
<Route index element={<List/>}/>
<Route path="propiedad/:id" element={<Single/>}/>
<Route path='propiedad/edit/:id' element={<Edit/>}/>
<Route path="new" element={<New inputs={userInput } title="Agregar Propiedad"/>}/>
</Route>

<Route path='products'>
<Route index element={<List/>}/>0




<Route path=":productId" element={<Single/>}/>
<Route path="new" element={<New inputs={productInputs} title="Agregar Productos" />}/>
</Route>







</Routes>


</BrowserRouter>




    


    </div>
  );
}

export default App;
