import React from 'react'

import Books from '../Books/Books'
import classes from './Turn.css'

export const Turn = (props) => {

    const Book = []

    for(let key in props.bookss){
        Book.push({
            title:props.bookss[key]
        })
    }

    function highlightBgColor (highlight) {
        const mapping = {
            'none':'',
            'correct':'green',
            'wrong':'red'
        }

        return mapping[highlight]
    }


    return (
        <div className={classes.turn} style={{backgroundColor:highlightBgColor(props.highlight)}} >
            <div className="col-4 offset-1">
                <img src={props.imageurl} className={classes.authorimage} alt="Author"/>
            </div>
            <div className="col-6">
                {Book.map((el) => <Books title={el.title} key={el.title} selectAnswer={props.selectAnswer}/> )}
            </div>
        </div>
    )
}
 
export default Turn;
