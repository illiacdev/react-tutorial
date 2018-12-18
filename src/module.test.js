import Foo from './Foo'

import EventBus from './Experiment/EventBus'

const log = (() => {
    let counter = 0;
    return event =>
        console.log(`${++counter}: type: ${event.type}, payload: ${event.payload}`)
})()

it('should bus test', function () {
    let bus = EventBus.getInstance();

    bus.select('first_event_name').subscribe(log);
    bus.emit({type: 'first_event_name', payload: 1});

    let bus2 = EventBus.getInstance();

    bus2.emit({type: 'first_event_name', payload: 2});

});


it('should ', function () {

    const log = (() => {
        let counter = 0;
        return event =>
            console.log(`${++counter}: type: ${event.type}, payload: ${event.payload}`)
    })()


    bus.bus.select('first_event_name').subscribe(log);
    bus.bus.emit({type: 'first_event_name', payload: 1});

});
/*
import Bus from 'rxjs-event-bus'


it('should 1', function () {
    const log = (() => {
        let counter = 0;
        return event =>
            console.log(`${++counter}: type: ${event.type}, payload: ${event.payload}`)
    })()


    const bus = new Bus()

// ещё не подписались, это событие мы не получим
    bus.emit({ type: 'first_event_name', payload: 1 })

    bus
        .select('first_event_name')
        .subscribe(log)

    bus
        .select('second_event_name')
        .subscribe(log)

// вот теперь мы готовы получать события 'first_event_name' и 'second_event_name'
    bus.emit({ type: 'first_event_name', payload: 2 })
    bus.emit({ type: 'second_event_name', payload: 1 })
    bus.emit({ type: 'second_event_name', payload: 2 })


    const bus2 = new Bus()
    bus2.emit({ type: 'second_event_name', payload: 100 })


});*/


it('should 2', function () {

    let obj1 = new EventBus();
    obj1.state = "new state!"
    let obj2 = new EventBus();

    console.log(obj1);
    console.log(obj2);


});