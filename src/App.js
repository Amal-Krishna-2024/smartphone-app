import logo from './logo.svg';
import './App.css';
import AddSmart from './component/AddSmart';
import SearchSmart from './component/SearchSmart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteSmart from './component/DeleteSmart';
import ViewAll from './component/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<AddSmart/>}/>
<Route path="/search" element={<SearchSmart/>}/>
<Route path="/delete" element={<DeleteSmart/>}/>
<Route path="/view" element={<ViewAll/>}/>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
