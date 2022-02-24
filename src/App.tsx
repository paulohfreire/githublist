import { Route, Routes } from "react-router-dom";
import InitialPage from "./pages/InitialPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InitialPage />} />
      </Routes>
    </div>
  );
}

export default App;
