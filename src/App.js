
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { userInput, productInputs } from './formSource';
import './style/dark.scss';
import { useState } from 'react';
import { DarkMode } from '@mui/icons-material';
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from 'react';

function App() {

  const {darkMode}= useContext(DarkModeContext)

 
  return (
    <div className={darkMode ? 'app dark' : ' app'}>
<BrowserRouter>
<Routes>
<Route path='/'>
<Route index element={<Home/>} />
<Route path= "login" element={<Login/>}/>
<Route path='user'>
<Route index element={<List/>}/>
<Route path=":userId" element={<Single/>}/>
<Route path="new" element={<New inputs={userInput } title="Agregar usuario"/>}/>
</Route>
<Route path='products'>
<Route index element={<List/>}/>
<Route path=":productId" element={<Single/>}/>
<Route path="new" element={<New inputs={productInputs} title="Agregar Productos" />}/>
</Route>

</Route>





</Routes>


</BrowserRouter>




    


    </div>
  );
}

export default App;
