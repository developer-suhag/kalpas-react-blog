import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GridView from "./components/Home/GirdView/GridView";
import Home from "./components/Home/Home/Home";
import ListView from "./components/Home/ListView/ListView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}>
            <Route path="listView" element={<ListView />} />
            <Route path="gridView" element={<GridView />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
