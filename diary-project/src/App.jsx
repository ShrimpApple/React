import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/new";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import { useReducer } from "react";

function App() {
  const [data, dispatch] = useReducer(useReducer, []);

  return(
    <div className='App'>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>
      </Router>
    </div>
  );
}
export default App
