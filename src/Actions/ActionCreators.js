import * as actionTypes from './ActionsTypes'

// import axios from 'axios'

function getAuthors() {
    return [{
        name: 'Mark Twain',
        imageurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg/220px-Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg",
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn',
            'Life on the Mississippi',
            'The Roughing it',
            'The title of the day'
        ]
    },
    {
        name: 'William Shakeshpear',
        imageurl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg",
        imageSource: 'Wikimedia Commons',
        books: ['Macbeth',
            'Life sdf sdf on the Mississippi',
            'The sdfsd sdfRoughing it',
            'Thee werwer wr title of the day'
        ]
    },
    {
        name: 'ERNEST HEMINGWAY',
        imageurl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MTUzNTA5OTAz/mark-twain-9512564-1-402.jpg",
        imageSource: 'Wikimedia Commons',
        books: ['Anna Karenina',
            'Far Away and Long Ago',
            'Buddenbrooks',
            ' Wuthering Heights',
        ]
    },
    {
        name: 'JOAN DIDION',
        imageurl: "https://c.tadst.com/gfx/750w/authors-day-fun.jpg?1",
        imageSource: 'Wikimedia Commons',
        books: ['The  werw collected essays ',
            'Life wer wer on the Mississippi',
            'The wer wer werwer wer Roughing it',
            'The tyu tyut u tu tu tu yu title of the day'
        ]
    },
    {
        name: ' RAY BRADBURY',
        imageurl: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2018%2F02%2Fkhaled-hosseini-1-2000.jpg%3Fw%3D450&w=800&q=85",
        imageSource: 'Wikimedia Commons',
        books: ['The  zxc xzc zxc zxcAdventures of Huckleberry Finn',
            'Life  ad sdf sf dsf son the Mississippi',
            'Ther ewr we rew rwe t Roughing it',
            'The  io il io lio liotitle of the day'
        ]
    },
    {
        name: 'GEORGE R.R. MARTIN',
        imageurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg/220px-Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg",
        imageSource: 'Wikimedia Commons',
        books: ['The  34 3 534 543Adventures of Huckleberry Finn',
            'Life  6 756 756 7 567on the Mississippi',
            'The 56756 7 567 567856 Roughing it',
            'The 34 325 345 34 5345 345 34 title of the day'
        ]
    }
]
}


export const getAuthorsSuccess = () => {
    return {
        type: actionTypes.GET_AUTHORS,
        data: getAuthors()
    }
}


export const selectAnswer = (answer) => {
    return {
        type:actionTypes.SELECTED_ANSWER,
        answer:answer,
        data:getAuthors()
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