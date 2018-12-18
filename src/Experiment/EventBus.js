import Bus from 'rxjs-event-bus'


export default class EventBus {

    static instance;

    static getInstance(){
        if(EventBus.instance)
            return EventBus.instance;

        EventBus.instance = new Bus();
        Object.freeze(EventBus.instance);
        return EventBus.instance;
    }

}


