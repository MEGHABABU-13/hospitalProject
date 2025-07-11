import logo from './logo.svg';
import './App.css';
import AddPatient from './components/AddPatient';
import SearchPatient from './components/SearchPatient';
import DeletePatient from './components/DeletePatient';
import ViewPatient from './components/ViewPatient';
import OtherBranche from './components/OtherBranche';
import Certificates from './components/Certificates';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Routes>
<Route path="/" element={ <AddPatient/> } />
<Route path="/search" element={ <SearchPatient/> } />
<Route path="/delete" element={ <DeletePatient/> } />
<Route path="/other" element={ <OtherBranche/> } />
<Route path="/about" element={ <Certificates/> } />

    </Routes>
   </BrowserRouter>
  );
}

export default App;
