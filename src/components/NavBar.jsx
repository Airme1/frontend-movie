import { Link } from "react-router-dom"
import "../styles/Navbar.css"

export default function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Real Films Searcher</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourites" className="nav-link">Favourites</Link>
            </div>
        </nav>
    )
}