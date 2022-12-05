import React,{useState, useRef} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './login.scss'
import { Navigate, useNavigate  } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {login} from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";



const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};


const Login = () => {


let navigate = useNavigate();
const form = useRef();
const checkBtn = useRef();


const  [username, setusername] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);

const { isLoggedIn } = useSelector((state )=> state);
const { message } = useSelector((state )=> state);

const dispatch = useDispatch();

const onChangeUsername= (e) => {

  const username = e.target.value;
  setusername(username);
}

const onChangePassword = (e) => {

  const password = e.target.value;
  setPassword(password);
}

const handleLogin = (e) => {

e.preventDefault();
setLoading(true);
form.current.validateAll();

if(checkBtn.current.context._errors.length === 0){

dispatch(login(username, password))
.then(() => {

navigate('/home');
window.location.reload()

})
.catch(()=> {
setLoading(false);

})

}else{
  setLoading(false);
}

};
if(isLoggedIn){
  return <Navigate to='/home'/>
}



  return (
    <div className='new'>
<Sidebar/>
<div className="newContainer">
  
  <Navbar/>

<div className="top">

<h1>Inicia Sesion </h1>

</div>
<div className="bottom">
<div className="left">


</div>

<div className="right">
<Form  onSubmit={handleLogin} ref={form}>

<div className="formIput">

<label htmlFor="file"> Username:</label>
<Input type="text"
name='username'
value={username}
onChange={onChangeUsername}
validations={[required]}
/>

</div>

<div className="formIput" >

<label htmlFor="">Password</label>
<Input type='password' 
name='password'
value={password}
onChange={onChangePassword}
validatiosn={[required]}
placeholder='' />

</div>



<button  disabled={loading}>
{loading && (

<span className="spinner-border spinner-border-sm"></span>

)}
 <span>Login</span>
</button>
{message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
<CheckButton style={{ display: "none" }} ref={checkBtn} />
</Form>

</div>
</div>

  </div> 

    </div>
  )
}

export default Login