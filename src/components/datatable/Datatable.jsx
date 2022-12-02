import React, { useState } from 'react';
import './datatable.scss'
import {userColumns, userRows} from '../../datatableSource'

import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';


const Datatable = () => {
  const[data, setData] = useState(userRows)
  const handleDelete = (id)=>{
setData(data.filter(item=> item.id !== id))

  }

  const actionsColumn = [{field:'actions', hederName:'Action',width:200,renderCell:(params)=> {
    return(
      <div className='cellAction'>
        <Link to='/user/test'>
        <div className='viewButton'>View</div></Link>
        <div className='deleteButton' onClick={()=> handleDelete(params.row.id)}>Delete</div>

      </div>
    )

  }}]
  return (
    <div className='datatable' >
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
    </div>
  )
}

export default Datatable