//@flow

import { TEST_ACTION } from './actionTypes'
import { uiStopLoading, uiStarLoading } from "./index";


export function testAction() {
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

export const test:Action = (data:string) => ({
    type: TEST_ACTION,
    data
})

