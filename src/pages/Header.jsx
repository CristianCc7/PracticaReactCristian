import logo from "../imagenes/logoSimpsons.webp";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container py-5">
            <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                    <Link to="/">
                        <img src={logo} alt="The Simpsons" width={180} />
                    </Link>
                </div>
                <div className="col-auto">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Family" className="nav-link">Family</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/History" className="nav-link">History</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;

