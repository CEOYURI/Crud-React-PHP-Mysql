import { useEffect, useState } from 'react';
import{Link} from 'react-router-dom';


export const ListaUsers = ()=>{
  const [Users, SetUsers] = useState([])
  const [status, setstatus] = useState({
    type: '',
    mensagem:''
  })

  const ApagarUsuario = async (userID)=>{
    
    await fetch('http://localhost/PHP/apagar.php?id='+ userID)
    .then((response)=> response.json())
    .then((responseJson)=>{
      if(responseJson.erro){
       setstatus({
        type: 'erro',
       mensagem: responseJson.mensagem}) 
      } else{
        setstatus({
          type: 'sucesso',
         mensagem: responseJson.mensagem}) 
         getUsers();
      }

    }).catch(()=>{
      setstatus({
        type: 'erro',
       mensagem: "ERRO: usuario não apagado!"}) 
    }
)
    }
    

  
 
    const getUsers = async () => {
  fetch('http://localhost/PHP/listar.php')
   .then((response) => response.json())
    .then((responseJson) => {
       
      SetUsers(responseJson.records)

    }) ;
   
  }
  useEffect(()=>{
    getUsers();
  }, []);
  
    return(
        <> 
        <div >
            
            <div className='form-group'>
        <Link to="/Cadastrar"> <button className='btn btn-primary'>Cadastrar</button></Link> 
          </div>
            <div >
            { status.type === 'erro'?<div>{status.mensagem}</div> : '' }
            {  status.type === 'sucesso'?<div className='alert alert-danger 'role='alert'>{status.mensagem}</div> : '' }
            </div>
            <div>
              <div className="table-responsive">
            <table className="table table-striped">
                <tbody >
                    <tr >
                  
                    <th>#</th>
                    <th>nome</th>
                    <th>sexo</th>
                    <th>estado</th>
                    <th>Infor</th>
                    <th>Contactos</th>
                    <th>data_entrada </th>
                    <th>Accão</th>
        
                    </tr>
                    </tbody>
                <tbody>
                    {Object.values(Users).map((user)=>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.nome}</td>
                        <td>{user.sexo}</td>
                        <td>{user.estado}</td>
                        <td>{user.infor}</td>
                        <td>{user.Contacto}</td>
                        <td>{user.data_entrada}</td>
                        <td>
                          <td>
                        <Link to={"/Editar/" + user.id}>
                          <button className='btn btn-warning btn-sm'>Editar</button>
                          </Link>  
                        </td>
                        <td>
                          <button onClick={()=>ApagarUsuario(user.id)} className='btn btn-danger btn-sm'>Apagar</button>
                          </td>
                        </td>
                    </tr>
                
                  )  }
                </tbody>
            </table>
            </div>
            </div>
        </div>
       
        </>
    )
}