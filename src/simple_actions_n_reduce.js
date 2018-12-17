const simple_actions_n_reduce = {
    INC: 'INC',
    DEC: 'DEC',

    inc() {
        return {type: simple_actions_n_reduce.INC}
    },

    dec() {
        return {type: simple_actions_n_reduce.DEC}
    }

}

const initState = {
    number: 11
}

export const reduce = (state = initState, action) => {
    console.log("on reduce !");
    switch (action.type) {
        case simple_actions_n_reduce.INC:
            return {...state, number: state.number + 1}
            break;

        case simple_actions_n_reduce.DEC:
            return {...state, number: state.number - 1}
            break;

        default:
            return state;
    }

}

export default simple_actions_n_reduce;

