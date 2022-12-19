import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'



export default function IsRoleProtect({ children }) {


  const navigate = useNavigate()

  const { user: currentUser } = useSelector((state) => state);
  const isRoles = currentUser.roles[0] === 'ROLE_ADMIN'

  const message = () => {
    Swal.fire(
      'no esta autorizado !'

    )

  }



  if (!isRoles) {



    message()
    navigate('/activos')

  }


  return (
    <>
      {children}

    </>

  )


}