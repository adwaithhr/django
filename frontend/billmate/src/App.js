import './App.css';
import Landing from './Components/landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bill from './Components/Bill';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path='/Bill.js' element={<Bill/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Bill/> */}
    </div>
  );
}

export default App;
