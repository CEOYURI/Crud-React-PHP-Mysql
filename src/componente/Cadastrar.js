import React, { useState } from "react"
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";

export const Cadastrar = () => {
const Navigate = useNavigate();

    const [inputs, setInputs] = useState([]);
    

    const ValorInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:80/PHP/cadastrar.php', inputs).then(function(response){
          //  console.log(response.data);
        Navigate("/");
           
        });

    }
    return(
        <>
        <div className="container">
        <div >
            <Link to="/">
                <button className="btn btn-primary">Voltar</button>
            </Link>
        </div>
        <div className="flex">
        <form onSubmit={handleSubmit}  className="form-signup" >
            <div  className="form-group">
                <label>Nome:</label>
                <input id="idnome" type="text" name="nome"className="form-control is-valid" onChange={ValorInput} required />
            </div>
            <div  className="form-group" >
                <label >Masculino</label>
                <input type="radio" name="sexo" id="Masc" className="form-input-check" value="M" onChange={ValorInput} />
                
                
                <label>Feminino</label>
                <input type="radio" name="sexo" id="Femi"className="form-input-check" value="F" onChange={ValorInput} />
            </div>
           
            <div  className="form-group">
                <label >Estado:</label>
                <input id="estado" type="text" name="estado"className="form-control" onChange={ValorInput} />
            </div>
            <div  className="form-group">
                <label >Informaçoes Adicionais:</label>
                <input id="idinfor" type="text" name="infor" placaholder="localização, rua..."className="form-control" onChange={ValorInput} />
            </div>
            <div  className="form-group">
                <label > Contacto:</label>
                <input id="contacto" type="text" name="Contacto" placaholder="+244 935699190"className="form-control"  onChange={ValorInput} required/>
            </div>
        <div className="form-submit">
            <button type="submit" className="btn btn-success">Cadastrar</button>
        </div>
        </form>
        </div>
        </div>
        </>
    )
    }