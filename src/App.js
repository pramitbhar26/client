import './App.css';
import TextEditor from './TextEditor';
import { Route, Routes } from "react-router"
import { Router } from 'react-router';
import Home from './Routes/Home';
function App() {
  return (
      <Routes>

        <Route path='/' element={<Home />} />
        {/* <Route path='/documents/:id'>
                 <TextEditor />
                </Route> */}

      </Routes>
  );
}

export default App;
