import React from 'react'
import PropTypes from 'prop-types'


export default function Alert(props) {

    const capitalize = (str) => {
        const lower = str.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div>
            {/* it will give us error first because props.alert is null so therefore we will use props.alert && (it will behave like
                a if else statement like if it is not null then do this) to fix it */}
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
