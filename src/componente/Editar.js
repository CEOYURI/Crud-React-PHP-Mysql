import {Link,  useNavigate,  useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';


    export const Editar = ()=>{
        const navigate = useNavigate();

        const[ nome, setNome] = useState('');
        const[sexo, setSexo] = useState('');
        const[estado, setestado] = useState('');
        const[infor, setinfor] = useState('');
        const[ Contacto, setContacto] = useState('');

        
        
        const {id} = useParams();
        const [status, setstatus] = useState({
            type: '',
            mensagem: ''
        })
        const EditarProd =  async e =>{
            e.preventDefault();
            await fetch("http://localhost:80/PHP/Editar.php",{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id, nome, sexo,estado, infor,Contacto})
            }).then((response)=> response.json())
            .then((responseJson) =>{
              
              //  console.log(responseJson);
              if(responseJson.erro){
                setstatus({
                    type: 'error',
                    mensagem: responseJson.mensagem
                });
              }
            }).catch(()=>{
                setstatus({
                    type: 'error',
                    mensagem:"Usuario não editado com,sucesso"
                })
            })
            navigate('/');
        }
    
useEffect(() => {
    const getUser = async ()=> {
        await fetch("http://localhost:80/PHP/visualizar.php?id="+ id)
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson);
            setNome(responseJson.records[id].nome);
            setSexo(responseJson.records[id].sexo);
            setestado(responseJson.records[id].estado)
            setinfor(responseJson.records[id].infor)
                setContacto(responseJson.records[id].Contacto);
        });
            
        
    }
    getUser();
}, [id]);
    
      

return(
    <>
    <div className='container'>
    <Link to={'/'}>
        <button className="btn btn-primary">Todos os Usuarios</button>  
    </Link>
    <div className='alert alert-success'>
         
       {status.type === 'erro'? <div>{status.mensagem}</div> : '' } 
        { status.type === 'sucesso'? <div>{status.mensagem}</div>  : ''}         
            </div>
            <div className="flex">
    <form onSubmit={EditarProd} className="form-signup">
            <div  className="form-group">
                <label>Nome:</label>
                <input id="idnome" type="text" name="nome"className="form-control" placeholder='nome completo' value={nome}  onChange={e => setNome(e.target.value)}  />
            </div>
            <div  className="form-group">
                
                <label >Masculino</label>
                <input type="radio" name="sexo" id="Masc" className="form-input-check" onChange={e => setSexo(e.target.value)} value="M" />
               
                
                <label>Feminino</label>
                <input type="radio" name="sexo" id="Femi" className="form-input-check" onChange={e => setSexo(e.target.value)} value="F" />
                
            </div>
           
            <div  className="form-group">
                <label >Estado:</label>
                <input id="estado" type="text" name="estado" className="form-control"  value={estado} onChange={e => setestado(e.target.value)} />
            </div>
            <div  className="form-group">
                <label >Informaçoes Adicionais:</label>
                <input id="idinfor" type="text" name="infor"className="form-control" placaholder="localização, rua..." value={infor} onChange={e => setinfor(e.target.value)}  />
            </div>
            <div  className="form-group">
                <label > Contacto:</label> 
                <input id="contacto" type="text" name="Contacto"className="form-control" placaholder="+244 935699190" value={Contacto}  onChange={e => setContacto(e.target.value)}  />
            </div>
        <div  className="form-submit">
            <button type="submit" className="btn btn-success">Editar</button>
        </div>
        </form>
        </div>
        </div>
    </>
)
   
    }