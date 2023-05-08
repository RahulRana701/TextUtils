// first we will import react in it and it will creat a function based component for us . just type rfc
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// if link is not imported directly type this.


// add your navbar here 
// we have made a component of navbar so that saara rayta app.js mei na faile.
// we want to pass some props as well bro
// to use proptypes we have to import it
// we have to install proptype package before using it.

export default function Navbar(props) {
    return (
        <nav className={`navbar bg-${props.mode} navbar-expand-lg bg-body-tertiary`} data-bs-theme={props.mode}>
            <div className="container-fluid">
                {/* we want this data to be passed  , so that's we made it prop, and it is written like this
            because it is javascript and js is written in {} */}
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.abouttext}</Link>
                        </li>
                    </ul>
                    {/* used turnary operator here like if it is light make text dark and vicecersa */}
                    <div className="d-flex">
                        {/* on click can have function not a function call that's we made a function in click
                        that have a function call */}
                        <div className="bg-primary rounded mx-2" onClick={() => {
                            props.togglemode2('primary')
                        }} style={{ height: '30px', width: '30px' }}></div>
                        <div className="bg-danger rounded mx-2" onClick={() => {
                            props.togglemode2('danger')
                        }} style={{ height: '30px', width: '30px' }}></div>
                        <div className="bg-success rounded mx-2" onClick={() => {
                            props.togglemode2('success')
                        }} style={{ height: '30px', width: '30px' }}></div>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
// if we want to give certain type to our prop we will use proptype.
// if we have given proptype as string and somehow it we passed a number it will give error.
Navbar.propTypes = {
    title: PropTypes.string,
    abouttext: PropTypes.string
};
//   default props are those props that , if somehow i failed to pass the props from app.js defaultprops will have 
// value for my prop and it will be passed then.
Navbar.defaultProps = {
    title: 'Stranger'
};
