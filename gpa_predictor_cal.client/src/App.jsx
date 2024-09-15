import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login.jsx";
import "./components/Login/login.css";
import Admin from "./Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/admin" element={Admin}></Route>
      </Routes>
    </Router>
  );
}

export default App;
