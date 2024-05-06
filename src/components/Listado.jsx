import { useState } from "react"
import { BaseColaboradores  } from "../BaseColaboradores"
import Table from 'react-bootstrap/Table';
import Formulario from "./Formulario";


const Listado = () => {
    const [listaColaboradores, setlistaColaboradores] = useState(BaseColaboradores)

    return (
       <div className="colaboradores">
         <container className="tabla-colaboradores">
          <h2>Lista de colaboradores</h2>
            <Table striped responsive="sm">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        
        {listaColaboradores.map(colaborador =>(
          <tr key={colaborador}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
          
      </tbody>
    </Table>
        </container>
    < Formulario />
       </div>
        
    )
    }
    
export default Listado