import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {


  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          <Route exact path="/homePage" element={<UserPage/>} />
        </Routes>
      </Router>
  );
}

export default App;
