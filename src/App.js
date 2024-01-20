import{BrowserRouter, Route, Routes} from 'react-router-dom';
import {ListaUsers} from './componente/ListaUsers';
import {Cadastrar} from './componente/Cadastrar';
import {Editar} from './componente/Editar';
import "./app.css";
import "./cadastro.css";
function App() {

  return (   
    <BrowserRouter>
   <Routes>
    <Route exact path='/' Component={ListaUsers } /> 
    <Route path='/Cadastrar' Component={Cadastrar} />
    <Route path='/Editar/:id' Component={Editar} /> 
    </Routes>
     </BrowserRouter>
  );
}
export default App;
