import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Coins from "./pages/Coins";
import Coin98 from "./pages/Coin98";
import GatNetwork from "./pages/GatNetwork";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="coins" element={<Coins />} />
          <Route path="coin98" element={<Coin98 />} />
          <Route path="gatnetwork" element={<GatNetwork />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
