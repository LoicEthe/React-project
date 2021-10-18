import {NavLink} from 'react-router-dom';

const Header = () => (<header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src={require("../assets/img/logo-cci.png").default} alt="papanoel" width="150"/>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/gallery">Gallery</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>)

export default Header