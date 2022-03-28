import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./containers/GlobalStyles/global-styles";
import Layout from "./components/layout/layout";
import Home from "./pages/Home";
import Key from "./pages/Key";
import Chords from "./pages/Chords";
import Scales from "./pages/Scales";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/keyfy" element={<Home />} />
          <Route path="/key" element={<Key />} />
          <Route path="/chords" element={<Chords />} />
          <Route path="/scales" element={<Scales />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
