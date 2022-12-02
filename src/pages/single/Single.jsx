import React from 'react';
import './single.scss'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {


  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
    <Navbar/>
   <div className="top">


<div className="left">
<p className="editButton">Edit</p>
<h1 className="title">informacion</h1>

<div className="item"> 
<img src="https://p4.wallpaperbetter.com/wallpaper/563/775/701/jon-snow-4k-image-download-wallpaper-preview.jpg" alt="" 
className="itemImg" />
<h1 className="details">
<div className="itemTitle">Jane Doe</div>
<div className="detailItem">
  <span className="itemKey">Email</span>
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

</div>
  
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