import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Coins from "./pages/Coins";
import Coin98 from "./pages/Coin98";
import Solv from "./pages/Solv";
import Dusk from "./pages/Dusk";
import Figment from "./pages/Figment";
import Lifeform from "./pages/Lifeform";
import GatNetwork from "./pages/GatNetwork";
import MagicSquare from "./pages/MagicSquare";
import Tatsumeek from "./pages/Tatsumeek";
import Zecrey from "./pages/Zecrey";
import Pstake from "./pages/Pstake";
import MeritCircle from "./pages/MeritCircle";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="coins" element={<Coins />} />
          <Route path="coin98" element={<Coin98 />} />
          <Route path="solv" element={<Solv />} />
          <Route path="dusk" element={<Dusk />} />
          <Route path="figment" element={<Figment />} />
          <Route path="gatnetwork" element={<GatNetwork />} />
          <Route path="lifeform" element={<Lifeform />} />
          <Route path="magicsquare" element={<MagicSquare />} />
          <Route path="tatsumeek" element={<Tatsumeek />} />
          <Route path="zecrey" element={<Zecrey />} />
          <Route path="pstake" element={<Pstake />} />
          <Route path="meritcircle" element={<MeritCircle />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
