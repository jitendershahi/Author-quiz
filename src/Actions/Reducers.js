import * as actionsTypes from './ActionsTypes'

import { shuffle, sample } from 'underscore'

const initialState = {
    authors: null,
    books: null,
    highlight:''
}

export const Reducer = (state = initialState, action) => {

    function getTurnData(authors) {
        const allBooks = authors.reduce((p, c, i) => {
            return p.concat(c.books)
        }, []);
        // console.log(allBooks)

        const fourRandomBooks = shuffle(allBooks).slice(0, 4);
        const answer = sample(fourRandomBooks)
        // console.log(fourRandomBooks)
        // console.log(answer)

        return {
            books: fourRandomBooks,
            authors: action.data.find((author) =>
                author.books.some((title) =>
                    title === answer))
        }
    }

    function getHighLightCorrectAnswer (getTurnData, answer){
        console.log(getTurnData)

        let isCorrect = getTurnData.authors.books.some((book) => book === answer);
        let highlight = ''

        highlight = isCorrect ? 'correct' : 'wrong';
        return highlight
    }

    switch (action.type) {
        case actionsTypes.GET_AUTHORS:
        // console.log(getTurnData(action.data))
            return {
                ...state,
                authors: getTurnData(action.data).authors,
                books: getTurnData(action.data).books,
                highlight:''
            }

            case actionsTypes.SELECTED_ANSWER:
            // console.log(action.answer)
            return {
                ...state,
                highlight:getHighLightCorrectAnswer(getTurnData(action.data), action.answer)
            }

        default:
            return {
                state
            }
    }
}



export default Reducer;