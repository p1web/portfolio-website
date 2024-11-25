import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Projects';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/projects" element={<Projects />} />
            {/* Add other routes here */}
        </Routes>
    </Router>
  );
}

export default App;
