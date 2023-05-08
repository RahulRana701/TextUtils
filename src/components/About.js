import React from 'react'

export default function About(props) {
    return (
        <div className='container my-3'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: props.mode == 'dark' ? 'white' : 'black' }}>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text" style={{ color: props.mode == 'dark' ? 'white' : 'black' }}>We'll never share your email with anyone else</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: props.mode == 'dark' ? 'white' : 'black' }}>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1" style={{ color: props.mode == 'dark' ? 'white' : 'black' }}>Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" style={{ color: props.mode == 'dark' ? 'white' : 'black' }}>Submit</button>
            </form>
        </div>
    )
}
