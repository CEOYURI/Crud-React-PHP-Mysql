import axios from 'axios'
import react, { useState } from 'react'


const Home = ()=>{
    const [search, setSearch]= useState("")

    const Pesquisar = async ()=>{
       
        await fetch('http://localhost/PHP/usuarios.php?id='+ search)
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

    return(
        <>
        <div>
            <input  value={search} onChange={setSearch(e.target.value)}/>
        </div>
        </>
    )
}