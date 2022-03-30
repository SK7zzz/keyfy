import { HashRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./containers/GlobalStyles/global-styles";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Key from "./pages/Key";
import Chords from "./pages/Chords";
import Scales from "./pages/Scales";

function App() {
  return (
    <HashRouter>
      <Layout>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/key" element={<Key />} />
          <Route path="/chords" element={<Chords />} />
          <Route path="/scales" element={<Scales />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
