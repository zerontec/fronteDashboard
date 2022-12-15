import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import {register} from '../../redux/actions'
import './register.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Navigate, useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2'
import Footer from "../../components/footer/Fotter";
import { Link } from "react-router-dom";



const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este dato es requerido!
      </div>
    );
  }
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Este no es un email valido.
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        
        El username debe tener entre  3 a 6 characters.
      </div>
    );
  }
};
const vname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        El name debe tener entre  3 a 6 characters.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        El  password debe tener entre 6 0 10 characters.
      </div>
    );
  }
};


const Register = () =>{
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state )=> state);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeName= (e) => {
    const name= e.target.value;
    setName(name);
  };
  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(name,username, email, password))
        .then(() => {
          Swal.fire(
            '¨usuario registrado con exito !',
            'You clicked the button!',
            'success'
          )
          setSuccessful(true);
          navigate("/");
          window.location.reload();
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };



return(

<>

<div className='register'>
{/* <Sidebar/> */}
<div className="newContainer">
  
  {/* <Navbar/> */}

<div className="top">

<h1>Registrar usuario </h1>

</div>
<div className="bottom">
<div className="left">


</div>

<div className="right">
<Form  onSubmit={handleRegister} ref={form} >
{!successful && (
 <>
<div className="formIput">

<label htmlFor="file"> Nombre </label>
<Input type="text"
                
              
                name="name"
                value={name}
                onChange={onChangeName}
                validations={[required, vname]} />

</div>

<div className="formIput" >

<label htmlFor="">username</label>
<Input ttype="text"
                type="text"
                
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required, vusername]} />

</div>
<div className="formIput" >

<label htmlFor="">Email</label>
<Input
                  type="text"
                
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />

</div>
<div className="formIput" >

<label htmlFor="">Password</label>
<Input  
                  type="password"
                 
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />

</div>

</>

)}
<div className="bt"><button>Send</button></div>



{message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />

</Form>
<Link to='/' >
<p className='register'>O Inicia Sesion</p></Link>
</div>
</div>

  </div> 

    </div>
<Footer/>
</>
)




}


export default Register