import React, { Component } from 'react'

import classes from './AddForm.css'


export class AddAuthorForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name:'',
            imageUrl:'',
            books:['book a ', 'book b'],
            bookTemp:''
        }
        
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitForm = () => {
        console.log(this.state)
    }

    addBookType = () => {
        this.setState({
            books:this.state.books.concat(this.state.bookTemp),
            bookTemp:''
        })
    }

    render () {

        return (
            <div className={classes.authorform}>
                <h1>Add author form</h1>
                {/* <p>{JSON.stringify(match)}</p> */}
                <form onSubmit={this.submitForm}>
                    <div className={classes.authorform_input} >
                        <label htmlFor="name">Name</label>
                        <input type="text" value={this.state.name} name="name" onChange={this.changeHandler} />
                    </div>
                    <div className={classes.authorform_input} >
                        <label htmlFor="imageUrl">Image Url</label>
                        <input type="text" value={this.state.imageUrl} name="imageUrl" onChange={this.changeHandler}/>
                    </div>
                    <div className={classes.authorform_input} >
                        {this.state.books.map((book) => {
                           return <p key={book}>{book}</p>
                        })}
                        {/* <label htmlFor="imageUrl">Image Url</label>
                        <input type="text" value={this.state.imageUrl} name="imageUrl" onChange={this.changeHandler}/> */}
                    </div>
                    <div className={classes.authorform_input} >
                        <label htmlFor="bookTemp">Image Url</label>
                        <input type="text" value={this.state.bookTemp} name="bookTemp" onChange={this.changeHandler}/>
                        <button type="button" name="Add"  onClick={this.addBookType}>Add Book Title</button>

                    </div>
                    <button type="submit" value="Add">Submit</button>
                </form>
            </div>
    
        )
    }
   
}

export default AddAuthorForm;