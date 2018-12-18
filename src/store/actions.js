const actions = {
    INC: 'INC',
    DINC: "DINC",
    DEC: 'DEC',

    inc() {
        return {type: actions.INC}
    },

    delay_inc() {
        return {type: actions.DINC}
    },

    dec() {
        return {type: actions.DEC}
    }

}

const initState = {
    number: 11
}

const reduce = (state = initState, action) => {
    console.log("on reduce !");
    switch (action.type) {
        case actions.INC:
            return {...state, number: state.number + 1}
            break;

        case actions.DEC:
            return {...state, number: state.number - 1}
            break;

        default:
            return state;
    }

}

export {actions, reduce};

