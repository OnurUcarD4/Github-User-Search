import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Views from "views";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="*" element={<Views />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
