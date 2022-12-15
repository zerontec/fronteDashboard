
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { userInput, productInputs } from './formSource';
import './style/dark.scss';
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from 'react';
import Editi from './pages/edit/Edit';
import Protected from './untils/Protected';
import IsRoleProtect from './untils/isRoleProtect';

function App() {






  const { darkMode } = useContext(DarkModeContext)


  return (
    <div className={darkMode ? 'app dark' : ' app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='home' element={<Protected><Home /></Protected>} />

          <Route path="Register" element={<Register />} />

          <Route path='activos' >
            <Route index element={<Protected><List /></Protected>} />
            <Route path="propiedad/:id" element={<Protected><Single /></Protected>} />
            <Route path='propiedad/edit/:id' element={<Protected><IsRoleProtect><Editi /></IsRoleProtect> </Protected>} />
            <Route path="new" element={<Protected><IsRoleProtect><New inputs={userInput} title="Agregar Propiedad" /></IsRoleProtect> </Protected>} />
          </Route>

          <Route path='products'>
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Agregar Productos" />} />
          </Route>







        </Routes>


      </BrowserRouter>







    </div>
  );
}

export default App;
