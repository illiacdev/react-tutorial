import {actions} from './actions'
import {takeEvery,takeLatest,put,all,call} from 'redux-saga/effects'
import {delay} from 'redux-saga'


function* asyncInc() {
    yield call(delay,1000);
    yield put(actions.inc());

}
function* watchInc() {
    yield takeLatest(actions.DINC, asyncInc);
}


function* helloSaga() {
    console.log('Hello Sagas!')
}

function* sagaMain() {
    yield all([
        helloSaga(),
        watchInc()
    ])
}


export {sagaMain,asyncInc};
