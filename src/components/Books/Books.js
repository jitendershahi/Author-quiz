import React from 'react'

import classes from './Books.css'


export const Books = (props) => {

    // console.log(props)
    return (
        <div className={classes.answer} onClick={() => props.selectAnswer(props.title)}>
            <h4>{props.title}</h4>
        </div>
    )
}

export default Books;