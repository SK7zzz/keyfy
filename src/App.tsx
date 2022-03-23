import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./containers/GlobalStyles/global-styles";
import Layout from "./components/layout/layout";
import Home from "./pages/Home";
import Key from "./pages/Key";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/key" element={<Key />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
