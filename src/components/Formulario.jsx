import {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alerta from './Alert';


const Formulario = () =>{
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [edad, setEdad] = useState("")
  const [cargo, setCargo] = useState("")
  const [telefono, setTelefono] = useState("")
  
 // mostrar si hay error
   const [error, setError] = useState(false)
   const [errorCorreo, setErrorCorreo] = useState(false)
   const [success, setSuccess] = useState(false)

  const validarInput = (e) => {
    e.preventDefault()
   
    if (nombre === "" || correo === "" || edad === "" || cargo === "" || telefono === "") {
      setError(true);
      return;
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(correo)) {
      setErrorCorreo(true);
      return;
    }

    setError(false);
    setSuccess(true);

    const newColaborador = {
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    };

    agregarColaborador(newColaborador);
  }

    return(
        <>
        <div  className='formulario'>
            <h4>Agregar Colaborador</h4>
        <Form onSubmit={validarInput}>
      <Form.Group className="xs-1" controlId="formGroupEmail">
        <Form.Control name="nombreColaborador" type="name" placeholder="Nombre del colaborador" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
      </Form.Group>
      <Form.Group className="xs-1" controlId="formGroupPassword">
        <Form.Control name="correoColaborador" type="email" placeholder="Correo del colaborador" onChange={(e) => setCorreo(e.target.value)} value={correo}/>
      </Form.Group>
      <Form.Group className="xs-1" controlId="formGroupPassword">
        <Form.Control name="edadColaborador" type="age" placeholder="Edad del colaborador" onChange={(e) => setEdad(e.target.value)} value={edad}/>
      </Form.Group>
      <Form.Group className="xs-1" controlId="formGroupPassword">
        <Form.Control name="telefonoColaborador" type="position" placeholder="Cargo del colaborador" onChange={(e) => setCargo(e.target.value)} value={cargo}/>
      </Form.Group>
      <Form.Group className="xs-1" controlId="formGroupPassword">
        <Form.Control name="telefonoColaborador" type="position" placeholder="Telefono del colaborador" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
      </Form.Group>
      <Button variant="primary" type="submit">Agregar colaborador</Button>
    </Form>
    {error ? <Alerta
            colorAlert = 'danger'
            textAlert = '¡completa todos los campos!'
            
            />:null}

    {errorCorreo ? <Alerta
            colorAlert = 'danger'
            textAlert = '¡No es un correo correcto!'
            
            />:null}

     {success ? <Alerta
            colorAlert = 'success'
            textAlert = '¡Colaborador agregado!'
            
            />:null}
        </div>

        
        </>
    )
    
}

export default Formulario