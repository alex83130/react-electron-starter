import { TEST_ACTION } from './actionTypes'
import { uiStopLoading, uiStarLoading } from "./index";

export const testAction = () => {
    return dispatch => {
        dispatch(uiStarLoading())
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('test')
            }, 350 + Math.random() * 300)
        }).then((data) => {
            dispatch(uiStopLoading())
            return dispatch(test(data))
        })
    }
}

export const test = (data) => ({
    type: TEST_ACTION,
    data
})

