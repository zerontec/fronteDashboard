

import React, { useContext } from 'react'
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import { LocalShipping } from '@mui/icons-material';
import { DarkModeContext } from '../../context/darkModeContext';
import { logout } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Sidebar = () => {

const dispatchar = useDispatch()

const logoOut =() => {
dispatchar(logout()) 
window.location.reload()


}
  const {dispatch} = useContext(DarkModeContext)
  return (

    <div className='sidebar'>
    <div className='top'>
      <Link to ='/home' style={{textDecoration:"none"}}>
    <span className='logo'>Dashboard</span>
    </Link>
    </div>
    
    <hr/>
    <div className='center'>
    <ul>
    <p className='title'> MAIN</p>
    <li> 
    <DashboardIcon className='icon'/>
    <Link to='/home'style={{textDecoration:"none"}}>
    <span>Dashboard</span>
    </Link>
    </li>
    <p className='title'> LIST</p>
    <Link to='/activos' style={{textDecoration:"none"}}>
    <li>
    <PersonOutlineIcon className='icon'/>
    <span>Propiedades</span></li>
    </Link>
    <Link to='/products' style={{textDecoration:"none"}}>
    <li>

    <Inventory2Icon className='icon'/>
    <span>Products</span></li>
    </Link>

    <li>
     
    <CreditCardIcon className='icon' />
    <span>Orders</span></li>
    <li>
    <DeliveryDiningIcon className='icon'/>
    <span>Delivery</span></li>
     <li>
     <QueryStatsIcon className='icon'/>
     <span>Staf</span></li>
     <p className='title'> USEFUL</p>
      <li>
      <NotificationsNoneIcon className='icon'/>
      <span>Notifications</span></li>
      <p className='title'> SERVICES</p>
       <li>
       <MonitorHeartIcon className='icon'/>
       <span>System Health</span></li>
       <li>
       <PsychologyIcon className='icon'/> 
       <span>Logs</span></li>
       <li>
       <SettingsIcon className='icon'/> 
       <span>Setting</span></li> 
       <p className='title'> USER</p> 
       <li>
       <AccountBoxIcon className='icon'/>
       <span>Profile</span></li>
       <li>
       <ExitToAppIcon className='icon' />
       <span onClick={logoOut}>Logout</span></li>    
    </ul>

    </div>
    <div className='bottom'>
    <div className='colorOption' onClick={()=> dispatch({type:'LIGHT'})}></div>
    <div className='colorOption' onClick={()=> dispatch({type:'DARK'})}></div>
    

    </div>
    
    </div>
  )
}

export default Sidebar