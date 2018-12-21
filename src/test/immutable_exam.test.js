// import {} from 'immutable';
import {List, Map} from 'immutable';
import im from "immutable";


it('should diff', function () {
    let user1 = {id: 1,item:{name:'name1'}}
    let user2 = {id: 2,item:{name:'name2'}}
    let user3 = {id: 3,item:{name:'name3'}}
    // let user4 = {id: 3}


    let src = [user1, user2, user3];
    console.log("원본 : " ,src);

    let members = List(src);

    let list = members.set(0, {id: 100});
    let newVar = list.get(0);




    console.log(members.toJS());
    console.log(list.toJS());






    // let a = {numbers : {user1:1,user2:2}}

});

it('should test', function () {


    // 1. 객체는 Map
    const obj = Map({
        foo: 1,
        inner: Map({
            bar: 10
        })
    });

    console.log(obj.toJS());

// 2. 배열은 List
    const arr = List([
        Map({foo: 1}),
        Map({bar: 2}),
    ]);

    console.log(arr.toJS());

// 3. 설정할땐 set
    let nextObj = obj.set('foo', 5);
    console.log(nextObj.toJS());
    console.log(nextObj !== obj); // true

// 4. 값을 읽을땐 get
    console.log(obj.get('foo'));
    console.log(arr.get(0)); // List 에는 index 를 설정하여 읽음

// 5. 읽은다음에 설정 할 때는 update
// 두번째 파라미터로는 updater 함수가 들어감
    nextObj = nextObj.update('foo', value => value + 1);
    console.log(nextObj.toJS());

// 6. 내부에 있는걸 ~ 할땐 In 을 붙인다
    nextObj = obj.setIn(['inner', 'bar'], 20);
    console.log(nextObj.getIn(['inner', 'bar']));

    let nextArr = arr.setIn([0, 'foo'], 10);
    console.log(nextArr.getIn([0, 'foo']));

// 8. List 내장함수는 배열이랑 비슷하다
    nextArr = arr.push(Map({qaz: 3}));
    console.log(nextArr.toJS());
    nextArr = arr.filter(item => item.get('foo') === 1);
    console.log(nextArr.toJS());

// 9. delete 로 key 를 지울 수 있음
    nextObj = nextObj.delete('foo');
    console.log(nextObj.toJS());

    nextArr = nextArr.delete(0);
    console.log(nextArr.toJS());

});

it('should list', function () {

    let array = [];
    array.push({id: 1, item: {name: 'name1'}});
    array.push({id: 2, item: {name: 'name2'}});
    array.push({id: 3, item: {name: 'name3'}});

    let list = List(array);
    console.log(list.toJS());

    let next = list.update(0,(value)=>{

        return value;
    });

    console.log(list.toJS());
    console.log(next.toJS());

});

it('should map', function () {
    let obj = {item: {number: 0}}
    // let obj = {item: 0}

    let map = Map(obj);


    console.log(map.toJS());

    // let update = map.set('item', {number:100});
    // let update = map.setIn(['item','number'], 100);
    // let update = map.setIn(['item','number'], 100);
    let update = map.update(['item','number'],1000)

    // let item = map.get('item');
    // console.log(item);
    item.number = 1000;
    console.log(map.toJS());
    // console.log(update.toJS());




});