import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Layout = () => {
    return (
        <>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
            {/* A publikus tartalom linkje */}
                        <Link className="nav-link active" to="/">Kezdőoldal</Link>
                    </li>
                    <li className="nav-item">
            {/* Az admin oldal linkjetartalom linkje */}
                        <Link className="nav-link" to="/urlap">Urlap</Link>
                    </li>
                    <li className="nav-item">
                    {/* Az admin oldal linkjetartalom linkje */}
                                <Link className="nav-link" to="/adatok">Adatok</Link>
                            </li>
                </ul>
            </nav>
            <article>
            {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
        </>
    );
};

export default Layout;

