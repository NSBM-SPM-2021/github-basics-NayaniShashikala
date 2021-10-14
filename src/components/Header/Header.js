import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
    <div className="header" data-testid = "header-title">
        <Link to="/" className ="title">Smart Quiz Hub</Link>
        <hr className="divider"/> 
    </div>
    );
};

export default Header; 