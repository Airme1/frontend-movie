import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Favourite from "./pages/Favourite";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  const movieNum = 1;

  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favourites" element={<Favourite/>}/>
        </Routes>
      </main >
    </MovieProvider>
  );
}

export default App;
