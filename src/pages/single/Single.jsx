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
  const propiedad = useSelector((state) =>state.propiedadDetail )



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
{propiedad ? (
<div className="item"> 
<img src="https://p4.wallpaperbetter.com/wallpaper/563/775/701/jon-snow-4k-image-download-wallpaper-preview.jpg" alt="" 
className="itemImg" />
<h1 className="details">
<div className="itemTitle">{propiedad.type}</div>
<div className="detailItem">
  <span className="itemKey">Direccion</span>
  <span className="itemvalue">{propiedad.address}</span>
</div>
<div className="detailItem">
  <span className="itemKey">Precio</span>
  <span className="itemvalue">${propiedad.price}</span>
</div>
<div className="detailItem">
  <span className="itemKey">Asesor</span>
  <span className="itemvalue">{propiedad.asesor} </span>
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