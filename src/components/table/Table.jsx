

import React, { useState, useEffect } from 'react'
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

const TableList = () => {

  const dispatch = useDispatch()

  const propiedades = useSelector(state => state.propiedades)

  useEffect(() => {
    dispatch(getAllPropiedades());

  }, [])




  return (


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
            <TableCell className='tableCell'>Status</TableCell>

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
                    <img src={propiedad.img} alt="" className="image" />
                    {propiedad.type}


                  </div>

                </div>
              </TableCell>
              <TableCell className='tableCell'>{propiedad.type}</TableCell>
              <TableCell className='tableCell'>{propiedad.price}</TableCell>
              <TableCell className='tableCell'>{propiedad.address}</TableCell>
              <TableCell className='tableCell'>{propiedad.asesor}</TableCell>
              <TableCell className='tableCell'>
                {/* <span className={`status ${propiedades.status}`}> {propiedades.status} </span> */}

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )


}

export default TableList


    // const rows = [
    //     {
    //         id:123456,
    //         product:"Acer Nitro 5",
    //         img:"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    //         customer:"Jhon Smith",
    //         date:"4 marzo",
    //         amount: 785,
    //         method: 'Cash on Deleviry',
    //         status: 'Approved',
    //     },
    //     {
    //         id:54789,
    //         product:"Acer standar",
    //         img:"https://m.media-amazon.com/images/I/51ryEasY34L.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    //         customer:"Luis Zeron",
    //         date:"16 septiembre",
    //         amount: 3000,
    //         method: 'Cash on Deleviry',
    //         status: 'Pending',
    //     },
    //     {
    //         id:325426,
    //         product:"Dell ",
    //         img:"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    //         customer:"gergina Zeron",
    //         date:"13 septiembre",
    //         amount: 785,
    //         method: 'Cash on Deleviry',
    //         status: 'Approved',
    //     },
    //     {
    //         id:22145,
    //         product:"Acer Nitro 5",
    //         img:"https://m.media-amazon.com/images/I/51ryEasY34L.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    //         customer:"Harry Potter",
    //         date:"4 marzo",
    //         amount: 785,
    //         method: 'Cash on Deleviry',
    //         status: 'Pending',
    //     },
    //      {
    //         id:54568,
    //         product:"Nevera",
    //         img:"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    //         customer:"Shakira",
    //         date:"4 marzo",
    //         amount: 526,
    //         method: 'Cash on Deleviry',
    //         status: 'Approved',
    //     },
    //      {
    //         id:621035,
    //         product:"Razer 5",
    //         img:"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    //         customer:"Lio ",
    //         date:"4 marzo",
    //         amount: 785,
    //         method: 'Cash on Deleviry',
    //         status: 'Pending',
    //     },

    //   ];

