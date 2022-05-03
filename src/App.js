import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import { Search } from "./pages/Search";
import { Watchlist } from "./pages/Watchlist";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
