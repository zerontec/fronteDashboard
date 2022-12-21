import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import './table.scss';
import { useDispatch, useSelector } from "react-redux";
import { getAllPropiedades, deletPropiedad, getOnePropiedad } from '../../redux/actions';
import './datatable.scss'
import { userColumns, userRows } from '../../datatableSource'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const Datatable = () => {

  const dispatch = useDispatch()

  const propiedades = useSelector(state => state.propiedades)
  const { user: currentUser } = useSelector((state) => state);


  useEffect(() => {
    dispatch(getAllPropiedades());

  }, [])


  // useEffect(() => {
  //   userServices.getAllPropierti().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);

  function deleteHandler(propiedad) {
    Swal.fire({
      title: 'Estas Seguro',
      text: "No podras revertir esta opracion !",
      icon: 'advertencia',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletPropiedad(propiedad.id));
        Swal.fire("La propiedad ha sido borrada!",

        );

        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        Swal.fire("Tu Propiedad Esta Segura !");
      }
    });
  }

  return (
    <>
      <div className="datatableTitle">
        Administrar propiedades
        {currentUser.isLoggedIn && currentUser.roles[0] === 'ROLE_ADMIN' ?
          <>
            <Link to='/activos/new' className='link'>Agregar Propiedad </Link>
          </> : null}
      </div>

      <TableContainer component={Paper} className='table'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell className='tableCell'>Traking ID</TableCell>
              <TableCell className='tableCell'>Imagen</TableCell>
              <TableCell className='tableCell'>Tipo</TableCell>
              <TableCell className='tableCell'>Precio</TableCell>
              <TableCell className='tableCell'>Direccion</TableCell>
              <TableCell className='tableCell'>Asesor</TableCell>
              <TableCell className='tableCell'>Ver</TableCell>
              <TableCell className='tableCell'>Editar</TableCell>
              <TableCell className='tableCell'>Borrar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {propiedades && propiedades?.map((propiedad) => (
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
                  {/* <span className={`status ${propiedades.status}`}> {propiedades.status} </span>  */}
                  <Link to={`propiedad/${propiedad.id}`} style={{ textDecoration: "none" }}>
                    <div className='viewButton'>View</div></Link>
                </TableCell>
                {currentUser.isLoggedIn && currentUser.roles[0] === 'ROLE_ADMIN' ?
                  <>
                    <TableCell className='tableCell'>

                      <Link to={`propiedad/edit/${propiedad.id}`} style={{ textDecoration: "none" }} >
                        <div className='viewButton'>Editar</div>
                      </Link>
                    </TableCell>

                    <TableCell className='tableCell'>


                      <div className='deleteButton' id={propiedad.id} onClick={() => deleteHandler(propiedad)}>Borrar</div>
                    </TableCell>
                  </> : null}
              </TableRow>
            ))}
          </TableBody>

        </Table>
        {propiedades.length < 1 ? <><div className='mensaje'><p>No hay Propiedades que mostrar</p></div></> : null}
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