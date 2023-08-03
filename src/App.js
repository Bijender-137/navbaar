import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/about" Component={About}/>
        <Route exact path="/project" Component={Project}/>
      </Routes>
    </>
  );
}

export default App;
