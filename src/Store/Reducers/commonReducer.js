// Store/Reducers/avatarReducer.js
import { TEST_ACTION } from '../Actions/actionTypes'

const initialState = { testParam: "" }

const  commonReducer = (state = initialState, action) => {
    let nextState
    switch (action.type) {
        case TEST_ACTION :
            nextState = {
                ...state,
                testParam: action.data
            }
            return nextState || state
        default:
            return state
    }
}

export default commonReducer