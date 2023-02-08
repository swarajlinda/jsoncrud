import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EditEmp from './EditEmp';
import DetailsEmp from './DetailsEmp';

function App() {
  return (
    <div className="App">
     <h1>React Js Crud Opreations </h1>
     <BrowserRouter>
     <Routes>
     <Route path ='/' element= {<EmpListing/>}> </Route>
     <Route path ='/employee/create' element= {<EmpCreate/>}> </Route>
     <Route path ='/employee/detail' element= {<DetailsEmp/>}> </Route>
     <Route path ='/employee/edit' element= {<EditEmp/>}> </Route>

     </Routes>
     </BrowserRouter>
    </div>

 
  );
}

export default App;
