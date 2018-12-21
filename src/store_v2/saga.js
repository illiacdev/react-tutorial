import * as s from 'redux-saga'
import * as se from 'redux-saga/effects'
import {actions} from './store'


function delay(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("done delay! ");
        },500)
    });
}


async function api_delay() {
    let count = 1;


    return "end delayes !"
}

const api_delay2 =()=> {
    // await delay();
    // await delay();
    // await delay();

    /*return new Promise(resolve => {
        setTimeout(()=>{
            resolve("done promise! ");
        },1000)
    });*/

    return new Promise(resolve => {
        resolve("done api_delay2");
    });

    // return "end delayes !"
}




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
    console.log("step1");
    let newVar = yield se.call(api_delay2);
    console.log(newVar);
    console.log("step2");
    result = yield se.call(api, action.payload);
    console.log("step3");
    console.log("result : ", result);
    console.log("step4");
    yield se.put(actions.successDelayInc());
    console.log("step5");
}

function* inc() {
    yield console.log("handle inc!");

}

function* dec() {
    yield console.log("handle dec!");

}
