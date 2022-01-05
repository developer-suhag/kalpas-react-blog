import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GridView from "./components/Home/GirdView/GridView";
import Home from "./components/Home/Home/Home";
import ListView from "./components/Home/ListView/ListView";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<ListView />} />
            {/* <Route path="listView" element={<ListView />} /> */}
            <Route path="gridView" element={<GridView />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
