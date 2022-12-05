import React from 'react';
import './single.scss'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getOnePropiedad } from '../../redux/actions';
const Single = () => {

  const{id} = useParams();
  const dispatch = useDispatch();
  const propiedad = useSelector((state) =>state.propiedad )



  useEffect(()=> {

dispatch(getOnePropiedad({id}));

  },[])
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
    <Navbar/>
   <div className="top">


<div className="left">
<p className="editButton">Edit</p>
<h1 className="title">informacion</h1>
{propiedad[id -1] ? (
<div className="item"> 
<img src="https://p4.wallpaperbetter.com/wallpaper/563/775/701/jon-snow-4k-image-download-wallpaper-preview.jpg" alt="" 
className="itemImg" />
<h1 className="details">
<div className="itemTitle">{propiedad[id -1].type}</div>
<div className="detailItem">
  <span className="itemKey">Email</span>S
  <span className="itemvalue">Janegmail.com</span>
</div>
<div className="detailItem">
  <span className="itemKey">Phone</span>
  <span className="itemvalue">+58 9712433</span>
</div>
<div className="detailItem">
  <span className="itemKey">Addressl</span>
  <span className="itemvalue">Bella vista </span>
</div>
<div className="detailItem">
  <span className="itemKey">Country</span>
  <span className="itemvalue">venezuela</span>
</div>
</h1>

</div>):(
<p>Loading</p>
)}
  
</div>

<div className="right">
<Chart aspect={3 / 1} title='User Spending ( Last 6 Moths)'/>

</div>
   
   </div>
<div className="bottom">
<h1 className="title">Ultimas Operaciones </h1>
  <List/>
</div>


      </div>


    </div>
  )
}

export default Single