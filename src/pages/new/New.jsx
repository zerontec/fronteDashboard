import React ,{useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import  DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './new.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createPropiedad } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Axios from 'axios';
import {Image} from 'cloudinary-react'
import { Home } from '@mui/icons-material';



const New = ({inputs, title}) => { 

  
  const navigate = useNavigate()

  // const {sendPropiedad}= useSelector(state => state.reducer)
  const dispatch= useDispatch();
  const [disable, setDisable] = useState(true);
  const [errors, setErrors] = useState({});

//form state - state del form
const [formInfo, setFormInfo] = useState({
  type:"",
  address:"",
  price:"",
  asesor:"",
  image:""

})

  function validate(formInfo) {
    let errors = {};
    formInfo.type
      ? (errors.type = "")
      : (errors.type = "You must enter a Recipe name");
    formInfo.address
      ? (errors.address= "")
      : (errors.address= "Enter Summary Please");
  
      formInfo.price
      ? (errors.price= "")
      : (errors.price= "Enter Summary Please");
      formInfo.asesor
      ? (errors.asesor= "")
      : (errors.asesor= "Enter Summary Please");
      formInfo.image
      ? (errors.image= "")
      : (errors.image= "Seleccione una imagen ");
      if (formInfo.type && formInfo.address && formInfo.price && formInfo.asesor ) {
          setDisable(false)
      }
  
    return errors;
  }
  
  



  

    //handles every change but submit's - maneja todo change excepto el del select
    const handleChange = e => {
      setFormInfo((formInfo) => ({
        ...formInfo,
        [e.target.name]: e.target.value,
      }));
      setErrors(
        validate({
          ...formInfo,
          [e.target.name]: e.target.value,
        })
      );
    }
  

  const handleSubmit = e => {
    if (formInfo.type && formInfo.address && formInfo.price && formInfo.asesor ) {
    e.preventDefault()
    dispatch(createPropiedad(formInfo))
    Swal.fire(
  '¨Propiedad creada con exito !',
  'You clicked the button!',
  'success'
)
   setFormInfo({
    type:"",
    address:"",
    price:"",
    asesor:"",
    image:""


   })
  }else{
    e.preventDefault();
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Debe completar toda la informacion !',
      
    })
  }
  }

  const uploadImages = (img) => {
 const files = img;
const formData = new FormData();
formData.append('file', files[0]);
formData.append("upload_preset", "sbzlyicj");


// const newAxios = Axios.create();
Axios.post(' https://api.cloudinary.com/v1_1/dzbo1hei6/image/upload', formData)
.then((res) => {


setFormInfo({ ...formInfo, 
  image:res.data });
setErrors(validate(formInfo))
})
}

  return (
    <div className='new'>
<Sidebar/>
<div className="newContainer">
  
  <Navbar/>

<div className="top">

<h1>{title}</h1>

</div>
<div className="bottom">
<div className="left">
{/* <img src= "https://thumbs.dreamstime.com/z/estilo-de-contorno-icono-c%C3%A1mara-fotogr%C3%A1fica-francesa-vector-esquema-para-dise%C3%B1o-web-aislado-en-fondo-blanco-200947421.jpg" alt="" /> */}
<Home className='icon'/>

</div>
<div className="right">


<form  onSubmit={handleSubmit}>


<div className="formIput">

<label htmlFor="">Imagen</label>
<input type='file'
id='image'

value={formInfo.image}
onChange={uploadImages}
name='image'

/>
{errors.image && <p className="pe">{errors.image}</p>}
</div>

<div className="formIput">
<label htmlFor="">Tipo de Propiedad</label>
<input 
type='text'
id='type'
value={formInfo.type}
onChange={handleChange}
name='type'



/>
{errors.type && <p className="pe">{errors.type}</p>}
</div>
<div className="formIput">

<label htmlFor="">Direccion</label>
<input type='text'
  id='address'
  
  value={formInfo.address}
  onChange={handleChange}
  name='address'
/>
{errors.address && <p className="pe">{errors.address}</p>}
</div>

<div className="formIput">

<label htmlFor="">Precio</label>
<input type='text'
        id='price'
        
        value={formInfo.price}
        onChange={handleChange}
        name='price'

/>
{errors.price && <p className="pe">{errors.price}</p>}
</div>

<div className="formIput">

<label htmlFor="">Asesor</label>
<input type='text'
id='asesor'

value={formInfo.asesor}
onChange={handleChange}
name='asesor'

/>
{errors.asesor && <p className="pe">{errors.asesor}</p>}
</div>




<button type="submit"  
   onClick={handleSubmit} 
>Send</button>


</form>


</div>
</div>

  </div> 

    </div>
  )
}

export default New

{/* <div className="formIput">

<label htmlFor="file"> Image:< DriveFolderUploadOutlinedIcon className='icon'/></label>
<input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{display:'none'}} />

</div> */}