
import axios from 'axios';
import authHeader from '../services/auth-header';
import authServices from '../services/auth-services'
 const URL = 'http://localhost:5040/'


export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const SET_MESSAGE = "SET_MESSGE";
export const CLEAR_MESSAGE = "CLEAR_MESSGE";
export const REGISTER_USER = "REGISTER_USER";


export const CREATE_PROPIEDAD =  'CREATE_PROPIEDAD'
export const GET_PROPIEDADES = 'GET_PROPIEDADES';
export const UPDATE_PROPIEDAD = 'UPDATE_PROPIEDAD';
export const DELETE_PROPIEDAD = 'DELETE_PROPIEDAD';
export const GET_ONE_PROPIEDAD = 'GET_ONE_PROPIEDAD';
    


// message
export const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message,
  });
  
  export const clearMessage = () => ({
    type: CLEAR_MESSAGE,
  });




  //register

  export const register = (username,name,password, email) =>(dispatch)=>{

    return authServices.register(username,name,email, password).then(
        (response)=> {

            dispatch({
                type:REGISTER_SUCCESS,
            });
            dispatch({

                type:SET_MESSAGE,
                payload:response.data.message,

            });
            return Promise.resolve()
        },


   (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
    return authServices.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    authServices.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };



  export function createPropiedad (data){

    return async function(dispatch){

      try{
        const res = await axios.post(`${URL}propiedad/create`, data,{

          headers:authHeader()

        });
        return res.data;

      }catch(err){

        return err.response
      }

    }

  }

export function getAllPropiedades() {

return async function(dispatch){

  try{
    const resp = await axios.get( `${URL}propiedad/all`)

    dispatch({

      type:GET_PROPIEDADES,
      payload:resp.data
    })


  }catch(err){

    return err.response
  }


}

}

export function getOnePropiedad(payload) {

  return async function(dispatch){
  
    try{
      const resp = await axios.get( `${URL}propiedad`, 
      {params:payload})
  
      dispatch({
  
        type:GET_ONE_PROPIEDAD,
        payload:resp.data
      })
  
  
    }catch(err){
  
      return err.response
    }
  
  
  }
  
  }





  export function editPropiedad (id,data){

    return async function(dispatch){

      try{
        const resp = await axios.put(`${URL}propiedad/${id} `, data)
          dispatch({
            type:UPDATE_PROPIEDAD,
            payload:data

          })
          return resp
      }catch(err){

          return err.response
      }


    }

  }

  export async  function deletPropiedad(id) {

    return async function(dispatch){

try{
  await axios.delete(`${URL}${id}`)

  dispatch({
    type:DELETE_PROPIEDAD,
    payload:{id}

  })

}catch(err){

  return err.response
}

    }

  }


