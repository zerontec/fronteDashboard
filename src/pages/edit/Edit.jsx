import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './edit.scss'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { editPropiedad, getAllPropiedades } from '../../redux/actions';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { Edit, ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';




function validate(update) {
  let errors = {};
  update.type
    ? (errors.type = "")
    : (errors.type = "Ingrese tipo de Propiedad ");
  update.address
    ? (errors.address = "")
    : (errors.address = "Ingrese una direccion de la Propiedad");

  update.price
    ? (errors.price = "")
    : (errors.price = "Ingrese Precio");
  update.asesor
    ? (errors.asesor = "")
    : (errors.asesor = "Ingrese nombre del Asesor ");



  return errors;

}


const Editi = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  const propiedades = useSelector((state) => state.propiedades)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    dispatch(getAllPropiedades());
  }, [dispatch]);

  let selectPropiedad = propiedades.filter((item) => item.id === id)

  const [update, setPropiedad] = useState({

    type: selectPropiedad.type,
    address: selectPropiedad.address,
    price: selectPropiedad.price,
    asesor: selectPropiedad.asesor,


  })
  function redirect() {
    window.location.href = "/admin/products";
  }


  const handleInputChange = function (e) {

    setPropiedad({
      ...update, [e.target.name]: e.target.value
    });
    let objError = validate({ ...update, [e.target.name]: e.target.value });
    setErrors(objError)
  }


  const handleSubmit = (e) => {
    if (update.type && update.address && update.price && update.asesor) {
      e.preventDefault();
      dispatch(editPropiedad(id, update));
      Swal.fire(
        '¨Propiedad Editada con Exito  !',
        'You clicked the button!',
        'success'
      )
      setPropiedad({
        type: "",
        address: "",
        price: "",
        asesor: ""


      })

    } else {
      e.preventDefault();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe completar toda la informacion !',

      })

    }
  }



  const title = "Editar Propiedad"
  return (

    <>

      <div className='edit'>
        <Sidebar />
        <div className="newContainer">

          <Navbar />

          <div className="top">

            <h1>{title}</h1>

          </div>
          <div className="bottom">
            <div className="left">
              {/* <img src= "https://thumbs.dreamstime.com/z/estilo-de-contorno-icono-c%C3%A1mara-fotogr%C3%A1fica-francesa-vector-esquema-para-dise%C3%B1o-web-aislado-en-fondo-blanco-200947421.jpg" alt="" /> */}
              <Edit className='icon' />
              <div className="arrows">
                <Link to='/activos'>
                  <ArrowBack className="arrow" /> </Link>

              </div>

            </div>
            <div className="right">


              <form onSubmit={(e) => handleSubmit(e)}>



                <div className="formIput">
                  <label htmlFor="">Tipo de Propiedad</label>
                  <input
                    type='text'
                    id='type'
                    value={update.type}
                    onChange={handleInputChange}
                    name='type'



                  />
                  {errors.type && <p className="pe">{errors.type}</p>}
                </div>
                <div className="formIput">

                  <label htmlFor="">Direccion</label>
                  <input type='text'

                    id='address'

                    value={update.address}
                    onChange={handleInputChange}
                    name='address'
                  />
                  {errors.address && <p className="pe">{errors.address}</p>}
                </div>

                <div className="formIput">

                  <label htmlFor="">Precio</label>
                  <input type='text'
                    id='price'
                    value={update.price}
                    onChange={handleInputChange}
                    name='price'

                  />
                  {errors.price && <p className="pe">{errors.price}</p>}
                </div>

                <div className="formIput">

                  <label htmlFor="">Asesor</label>
                  <input type='text'
                    id='asesor'

                    value={update.asesor}
                    onChange={handleInputChange}
                    name='asesor'

                  />
                  {errors.asesor && <p className="pe">{errors.asesor}</p>}
                </div>




                <button type="submit"
                  onClick={handleSubmit}
                >Modificar</button>


              </form>


            </div>
          </div>

        </div>

      </div>


    </>

  )



}


export default Editi 