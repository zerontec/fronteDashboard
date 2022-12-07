import React, { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss';
import { useDispatch, useSelector } from "react-redux";
import { getAllPropiedades, deletPropiedad, getOnePropiedad } from '../../redux/actions';
import './datatable.scss'
import {userColumns, userRows} from '../../datatableSource'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';



const Datatable = () => {

  const dispatch = useDispatch()

  const propiedades = useSelector(state => state.propiedades)

  useEffect(() => {
    dispatch(getAllPropiedades());

  },[])




  return (
<>
<div className="datatableTitle">
  Agregar nuevo usuario 
 
  <Link to='/user/new' className='link'>Agregar Propiedad </Link>

</div>
   
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell className='tableCell'>Traking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Ver</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {propiedades?.map((propiedad, index) => (
            <TableRow
              key={propiedad.id}>
              <TableCell >
                {propiedad.id}
              </TableCell>
              <TableCell className='tableCell'>
                <div className='tableCell'>
<div className='cellWrapper'>
            <img src={propiedad.img} alt="" className="image"/>
            {propiedad.type}
          
         
</div>

                </div>
              </TableCell>
              <TableCell className='tableCell'>{propiedad.type}</TableCell>
              <TableCell className='tableCell'>{propiedad.price}</TableCell>
              <TableCell className='tableCell'>{propiedad.address}</TableCell>
              <TableCell className='tableCell'>{propiedad.asesor}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${propiedades.status}`}> {propiedades.status} </span> 
                <Link to={`propiedad/${propiedad.id}`}>
       <div className='viewButton'>View</div></Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>
    
  )
}

export default Datatable




// const actionsColumn = [{field:'actions', hederName:'Action',width:200,renderCell:(params)=> {
//   return(
//     <div className='cellAction'>
//       <Link to='/user/test'>
//       <div className='viewButton'>View</div></Link>
//       <div className='deleteButton' onClick={()=> handleDelete(params.row.id)}>Delete</div>

//     </div>
//   )



{/* <div className='datatable' >
<div className="datatableTitle">
  Agregar nuevo usuario 
 
  <Link to='/user/new' className='link'>Agregar usuario </Link>

</div>
<DataGrid
className='datagrid'
        rows={data}
        columns={userColumns.concat(actionsColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div> */}