import * as ra from 'redux-actions'
import {createStore} from 'redux';
import {store,actions} from './store';

it('should ', function () {

    const actions = ra.createActions('INC', 'DEC');
    console.log(actions)


    console.log(actions.inc());
    console.log(actions.dec());
    // return;

    let reduce = ra.handleActions({
        [actions.inc]: (s, a) => ({...s, number: s.number + 1}),

        [actions.dec]: (s, a) => ({...s, number: s.number - 1})
    }, {number: 1});

    let store = createStore(reduce);
    store.subscribe(() => {
        console.log("on emitt!",store.getState())
    })

    store.dispatch(actions.inc());
    store.dispatch(actions.inc());
    store.dispatch(actions.inc());
    console.log(reduce);
    // let result = reduce(actions.inc());
    // console.log(result);

});
it('should show actions', function () {

    console.log(actions);
});


it('should 2', async function () {

    store.subscribe(() => {
        // console.log("on emitt!!!",store.getState())
    })

    // store.dispatch(actions.inc());
    // store.dispatch(actions.dec());
    // store.dispatch(actions.inc());
    // store.dispatch(actions.dec());
    store.dispatch(actions.delayInc("페이로드 테스트 입니다."));

    await new Promise(resolve => {
        console.log("start")
        setTimeout(() => {
            resolve("done");
        }, 3000);
    }).then(value => {
        console.log(value)
    });

});

function* gen(){
    console.log("start!")

    yield (() => {console.log(1)})();


    // console.log(newVar1)
    let newVar2 = yield (()=>{console.log(2)})();
    console.log(newVar2)
    let newVar3 = yield (()=>{console.log(3)})();
    console.log(newVar3)
}


it('should test gen', function () {
    let it = gen();
    it.next("첫번째 next");
    it.next("두번째 next");
    // it.next();
});