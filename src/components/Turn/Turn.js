import React from 'react'

export const Turn = (props) => {
    const style = {
        backgroundColor:'white'
    }
    console.log(props)

    return (
        <div className="row turn" style={style}>
            <div className="col-4 offset-1">
                <img src={props.imageurl} className="author-image" alt="Author"/>
            </div>
            <div className="col-6">
                {/* {props.books.map((el) => {
                    return el
                })} */}
                {props.name} || {props.imageSource}
            </div>
        </div>
    )
}

export default Turn;
