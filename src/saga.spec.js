import {asyncInc} from './store/saga'
import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
// import test from 'tape';


it('should ', function () {
    const gen = asyncInc();

    // gen.next();
    // gen.next();
    // gen.next();

    expect(gen.next().value).toEqual(call(delay,1000));

    /*assert.deepEqual(
        gen.next().value,call(delay,1000),
    'incrementAsync should return a Promise that will resolve after 1 second'*/
//)


});