import { Route, Routes } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;
