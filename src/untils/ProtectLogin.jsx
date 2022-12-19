import React from 'react';
import { Navigate,redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';


export default function  Protected ({children}) {
 

const { user: currentUser } = useSelector((state) => state);
const autori = currentUser.isLoggedIn

if(autori){

return <Navigate to="home" replace/>

}else{

    <Navigate to="/" replace/>
}





    return (
        <>
            {children}

</>
)


} 