import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ForbiddenLibrary from "./pages/ForbiddenLibrary";
import PledgeForm from "./components/PledgeForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<ForbiddenLibrary />} />
        <Route path="/pledge" element={<PledgeForm />} />
      </Routes>
    </Router>
  );
}

export default App;

