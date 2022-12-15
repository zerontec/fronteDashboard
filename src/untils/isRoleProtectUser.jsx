import React from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';




export default function IsRoleProtectUser({children}) {

    const { user: currentUser } = useSelector((state) => state);
  const  isRoles = currentUser.roles === 'ROLE_USERTL'

if(!isRoles){ 
    return   <Navigate to='/' replace />
   
    





}


return(
<>
{children}

</>

)


}