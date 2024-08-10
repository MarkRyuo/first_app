import { Fragment } from "react/jsx-runtime"


function NavBar() {
    return ( 
    <Fragment>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top">
                    Bootstrap 
                    </img>
                </a>
        </div>
    </nav>
    </Fragment>
    ) ; 
}

export default NavBar ;