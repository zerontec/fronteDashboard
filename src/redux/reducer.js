import {
  REGISTER_USER, SET_MESSAGE,CLEAR_MESSAGE,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT, GET_ONE_PROPIEDAD,
  GET_PROPIEDADES, DELETE_PROPIEDAD, UPDATE_PROPIEDAD, CREATE_PROPIEDAD
} from './actions'
    
const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  user: user
    ? { isLoggedIn: true, ...user }
    : { isLoggedIn: false, user: null },
  propiedades:[],
  propiedadDetail:null,
  propiedad:[],
  sendPropiedad:{}


};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    

    case REGISTER_USER:
      return {
        ...state,
        register_user: action.payload,
      };
   
    case SET_MESSAGE:
      return {
        message: action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        message: "",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

case CREATE_PROPIEDAD:
  return{

    ...state,
    sendPropiedad:action.payload
  
    
  };

  case GET_PROPIEDADES:
    return{

      ...state, 
      propiedades: action.payload
    }

    case GET_ONE_PROPIEDAD:
      return{
        ...state,
        propiedadDetail:action.payload

      }


      case DELETE_PROPIEDAD:
        return{
...state,
delete_propiedad:action.payload

        }

        case UPDATE_PROPIEDAD:
          return{
...state,
update_propiedad: action.payload

          }

    
    default:
      return state;
  }
}
