import axios from "axios";
import authHeader from "./auth-header";

const URL_API = 'localhost:5040/';

const getUserBoard  = async () => {

return await axios.get(URL_API + 'users',{

headers:authHeader()

})}

const getAllPropierti= async () => {

return await axios.get(URL_API + 'admin',{
    headers:authHeader()
    
})}


export default {


    getAllPropierti,
    getUserBoard
}

