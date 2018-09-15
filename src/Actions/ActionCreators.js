import * as actionTypes from './ActionsTypes'

// import axios from 'axios'


export const getAuthorsSuccess = () => {
    return {
        type: actionTypes.GET_AUTHORS,
        data: [
            {
                name:'Mark Twain',
                // imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg/220px-Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg',
                imageurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg/220px-Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg",
                imageSource:'Wikimedia Commons',
                books:['The Adventures of Huckleberry Finn','The Adventures of Huckleberry Finn','The Adventures of Huckleberry Finn','The Adventures of Huckleberry Finn']
            }
        ]
    }
}

// export const getAuthorsFail = () => {
//     return {
//         type: actionTypes.GET_AUTHORS
//     }
// }

// export const getAuthorsData = () => {
//     return dispatch => {
//         // axios.get("https://gist.githubusercontent.com/nanotaboada/6396437/raw/82dca67cc3b6a5ccfcf8af012664cdaa0025d999/books.json")
//         axios.get("https://reqres.in/api/users")
//         .then((data) => {
//                 console.log(data.data.data)
//                 dispatch(getAuthorsSuccess(data))
//             }).catch(error => {
//                 dispatch(getAuthorsFail())
//             })
//     }
// }