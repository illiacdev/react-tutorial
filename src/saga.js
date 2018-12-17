import {takeEvery} from 'redux-saga/effects'
import actions from './simple_actions_n_reduce'
function* watch() {
    yield takeEvery(actions.INC,action => {
        console.log("detect!");

    })
}