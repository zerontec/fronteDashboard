
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


export const CREATE_PROPIEDAD = 'CREATE_PROPIEDAD'
export const GET_PROPIEDADES = 'GET_PROPIEDADES';
export const UPDATE_PROPIEDAD = 'UPDATE_PROPIEDAD';
export const DELETE_PROPIEDAD = 'DELETE_PROPIEDAD';
export const GET_ONE_PROPIEDAD = 'GET_ONE_PROPIEDAD';


export const CREATE_USERS = 'CREATE_USERS'
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ONE_USER = 'GET_ONE_USER';
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'



// message
export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});




//register

export const register = (name, username, email, password) => (dispatch) => {

  return authServices.register(name, username, email, password).then(
    (response) => {

      dispatch({
        type: REGISTER_SUCCESS,
      });
      dispatch({

        type: SET_MESSAGE,
        payload: response.data.message,

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



export function createPropiedad(data) {

  return async function (dispatch) {

    try {
      const res = await axios.post(`${URL}propiedad/create`, data, { headers: authHeader() }
      );
      dispatch({
        type: CREATE_PROPIEDAD,
        payload: res.data
      })

    } catch (error) {
      console.log(error)
      dispatch({
        type: CREATE_PROPIEDAD,
        payload: { msg: "Every input must be filled" }
      })
    }




  }

}

export function getAllPropiedades() {

  return async function (dispatch) {

    try {
      const resp = await axios.get(`${URL}propiedad/all`, { headers: authHeader(), })

      dispatch({


        type: GET_PROPIEDADES,
        payload: resp.data
      })


    } catch (err) {

      return err.response
    }


  }

}

export function getOnePropiedad({ id }) {

  return async function (dispatch) {

    try {
      const resp = await axios.get(`${URL}propiedad/detail-propiedad/${id}`, { headers: authHeader(), }
      )

      dispatch({

        type: GET_ONE_PROPIEDAD,
        payload: resp.data
      })


    } catch (err) {

      return err.response
    }


  }

}





export function editPropiedad(id, data) {

  return async function (dispatch) {

    try {
      const res = await axios.put(`${URL}propiedad/edit/${id} `, data, { headers: authHeader() })
      return dispatch({
        type: UPDATE_PROPIEDAD,
        payload: res.data,

      })

    } catch (err) {

      return err.response
    }


  }

}



export const deletPropiedad = (id) => async (dispatch) => {

  try {
    await axios.delete(`${URL}propiedad/deleted/${id}`, { headers: authHeader(), })

    dispatch({
      type: DELETE_PROPIEDAD,
      payload: { id }

    })


  } catch (err) {

    return err.response
  }



}




//   export function deleteProduct(id) {
//     return async function (dispatch) {
//         const { data } = await axios.put(`${URL_BACK}/product/` + id)
//         return dispatch({
//             type: DELETE_PRODUCT,
//             payload: data
//         })
//     }
// }




//////////////////////////////////////USER ACTIONS ////////////////////////////////////

export function createUser(data) {

  return async function (dispatch) {

    try {
      const res = await axios.post(`${URL}user/create-user`, data, { headers: authHeader() }
      );
      dispatch({
        type: CREATE_USERS,
        payload: res.data
      })

    } catch (error) {
      console.log(error)
      dispatch({
        type: CREATE_USERS,
        payload: { msg: "Every input must be filled" }
      })
    }




  }

}

export function getAllUsers() {

  return async function (dispatch) {

    try {
      const resp = await axios.get(`${URL}user/get-all-users`, { headers: authHeader(), })

      dispatch({


        type: GET_ALL_USERS,
        payload: resp.data
      })


    } catch (err) {

      return err.response
    }


  }

}


export function getOneUser({ id }) {

  return async function (dispatch) {

    try {
      const resp = await axios.get(`${URL}user/put-user/${id}`, { headers: authHeader(), }
      )

      dispatch({

        type: GET_ONE_USER,
        payload: resp.data
      })


    } catch (err) {

      return err.response
    }


  }

}



export function editUser(id, data) {

  return async function (dispatch) {

    try {
      const res = await axios.put(`${URL}user/put-user/${id} `, data, { headers: authHeader() })
      return dispatch({
        type: UPDATE_USER,
        payload: res.data,

      })

    } catch (err) {

      return err.response
    }


  }

}



export const deleteUser = (id) => async (dispatch) => {

  try {
    await axios.delete(`${URL}user/delete-user/${id}`, { headers: authHeader(), })

    dispatch({
      type: DELETE_USER,
      payload: { id }

    })


  } catch (err) {

    return err.response
  }



}



