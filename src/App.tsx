import { HashRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./containers/GlobalStyles/global-styles";
import Layout from "./components/layout/layout";
import Home from "./pages/Home";
import Key from "./pages/Key";
import Chords from "./pages/Chords";
import Scales from "./pages/Scales";

function App() {
  return (
    <HashRouter basename="">
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keyfy/key" element={<Key />} />
          <Route path="/keyfy/chords" element={<Chords />} />
          <Route path="/keyfy/scales" element={<Scales />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
