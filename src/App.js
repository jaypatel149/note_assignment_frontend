import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Add from "./components/layout/Add";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
