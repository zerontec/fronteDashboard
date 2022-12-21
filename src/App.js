
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
import ProtectedRoute from './untils/ProtectedA';
import Perfil from './pages/perfil/Perfil'

function App() {



  const user = JSON.parse(localStorage.getItem("user"));
  const { darkMode } = useContext(DarkModeContext)


  return (
    <div className={darkMode ? 'app dark' : ' app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path = 'perfil' element={<Perfil/>}/>
          <Route path='home' element={<ProtectedRoute isAllowed={user}><Home /></ProtectedRoute>} />
          <Route path='activos' element={<ProtectedRoute isAllowed={!!user} />} >
            <Route index element={<List />} />
            <Route path="propiedad/:id" element={<Single />} />
            <Route path='propiedad/edit/:id' element={<ProtectedRoute redirectPath="/home"
              isAllowed={!!user && user.roles.includes('ROLE_ADMIN') }><Editi /></ProtectedRoute> } />
            <Route path="new" element={<ProtectedRoute redirectPath="/home"
              isAllowed={!!user && user.roles.includes('ROLE_ADMIN') }><New inputs={userInput} title="Agregar Propiedad" /> </ProtectedRoute>} />
          </Route>

          <Route path='users'>
            <Route index element={<List />} />
            <Route path="user/:id" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Crear usuarios" />} />
          </Route>







        </Routes>


      </BrowserRouter>







    </div>
  );
}

export default App;
