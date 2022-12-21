import {
  REGISTER_USER, SET_MESSAGE,CLEAR_MESSAGE,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT, GET_ONE_PROPIEDAD,
  GET_PROPIEDADES, DELETE_PROPIEDAD, UPDATE_PROPIEDAD, CREATE_PROPIEDAD,
  REGISTER_SUCCESS, REGISTER_FAIL,GET_ALL_USERS,GET_ONE_USER,UPDATE_USER,CREATE_USERS,DELETE_USER
} from './actions'
    
const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  user: user
    ? { isLoggedIn: true, ...user }
    : { isLoggedIn: false, user: null },
  propiedades:[],
  propiedadDetail:null,
  propiedad:[],
  sendPropiedad:{},
  sendUsers:{},
  userDetail:null


};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };

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


        }

        case UPDATE_PROPIEDAD:
          return{
...state,
// update_propiedad: action.payload

          }

          case CREATE_USERS:
            return{
          
              ...state,
              sendUsers:action.payload
            
              
            };
          

          case GET_ALL_USERS:
            return{
    ...state,
    
    
            }

            case GET_ONE_USER:
              return{
                ...state,
                userDetail:action.payload
        
              }

              case UPDATE_USER:
                return{
      ...state,
      // update_user: action.payload
      
                }
        
case DELETE_USER:
  return{

    ...state

  }
    
    default:
      return state;
  }
}
