import * as s from 'redux-saga'
import * as se from 'redux-saga/effects'
import {actions} from './store'

function api(value) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("done promise! " + value);
        },1000)
    });
}

export function* root() {
    yield se.all([
        se.takeEvery(actions.inc,inc),
        se.takeEvery(actions.dec,dec),
        se.takeEvery(actions.delayInc,delayInc),
    ]);
}

function* delayInc(action) {
    let result;
    result = yield se.call(api, action.payload);
    console.log("result : ", result);
    yield se.put(actions.successDelayInc());
}

function* inc() {
    yield console.log("handle inc!");

}

function* dec() {
    yield console.log("handle dec!");

}
