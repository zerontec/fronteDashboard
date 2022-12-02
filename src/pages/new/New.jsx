import React ,{useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import  DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './new.scss';

const New = ({inputs, title}) => {

  const [file, setFile ]= useState("");
  console.log(file)
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
<img src={file ? URL.createObjectURL(file): "https://thumbs.dreamstime.com/z/estilo-de-contorno-icono-c%C3%A1mara-fotogr%C3%A1fica-francesa-vector-esquema-para-dise%C3%B1o-web-aislado-en-fondo-blanco-200947421.jpg"} alt="" />


</div>
<div className="right">
<form >

<div className="formIput">

<label htmlFor="file"> Image:< DriveFolderUploadOutlinedIcon className='icon'/></label>
<input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{display:'none'}} />

</div>
{inputs.map(input=>( 
<div className="formIput" key={input.id}>

<label htmlFor="">{input.label}</label>
<input type={input.type} placeholder={input.placeholder} />

</div>
))}

<button>Send</button>


</form>

</div>
</div>

  </div> 

    </div>
  )
}

export default New