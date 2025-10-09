import { Link } from "react-router-dom";
export function Header(){
    return(  <header>
          <Link to="/" className="logo">Myblog</Link>
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/Registre">Registre</Link>
          </nav>
         
        </header>);
}