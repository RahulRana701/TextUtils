import React, { useState } from 'react';
import PropTypes, { element } from 'prop-types'

export default function Text(props) {
    // this is the syntax to use state., we made a text variable and we said , whenever we have to change the state
    // we will use this settext function to do that (which we made);intially the value of text is enter the text 
    // here
    const [text, settext] = useState("enter the text here");
    // settext("great") this is correct way to upadte our text variable , now our text variable will have this value
    // text="great"; this is wrong state will be changed using function that we made that is settext not like this.
    const [btntext, setbtntext] = useState("enable dark mode");
    const [mystyle, setmystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const handlonclick = () => {
        //    now when someone clicks on my button the value of text will be changed without reloading the page.
        // but we are not able to type anything in it because
        // now when someone clicks our button it will get turn into capital
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const handlofclick = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
    }
    const handleclear = () => {
        let newtext = '';
        settext(newtext);
    }
    const handletrim = () => {
        let newtext = text.trim();
        settext(newtext);
    }
    const handlecolor = () => {
        if (mystyle.color === 'black') {
            setmystyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtntext("disable dark mode")
        }
        else {
            setmystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("enable dark mode")
        }
    }
    // on change function to hame banana he hai , ye tb run hoga jb kuch change hoga vaha jaha ye lagaya hai, hence
    // this gives us a event in free, it is neccasary to use onchange as due to that we are able to change our state.
    const handleonchange = (event) => {
        // iska mtlb jo hum likhege ya change krege usme vo jo text ki value hai usi mei add krdo mtlb barabar krdo
        // uske , now we can write
        settext(event.target.value);
    }

    return (
        <>
            <div>
                {/* javscript ke andr ek object daal raha hu that's why {{}} */}
                <h1 style={{ color: props.mode == 'dark' ? 'white' : 'black' }}>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" style={mystyle} value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="11"></textarea>
                </div>
                <button className="btn btn-primary mx-2  my-3" onClick={handlonclick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handlofclick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleclear}>Clear</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handletrim}>Trim</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handlecolor}>{btntext}</button>
            </div>
            <div className="container my-3" style={{ color: props.mode == 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                {/* means empty elements na lao , jo empty elements nhi hai , vo hi array mei daalo. */}
                {/* filter naam ka ek function banaya ise fix krne ke liye. */}
                <p>{text.split(' ').filter((element) => { return element.length != 0 }).length} words and {text.length} characters</p>
            </div>
        </>
    )
}

// there are various events and we can make various states , here we just made one state.