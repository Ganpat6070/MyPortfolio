import "./App.css";

import { Header } from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './Homepage';
import ProjectContainer from './ProjectContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project" element={<ProjectContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;