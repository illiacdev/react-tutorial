const actions = {
    INC: 'INC',
    DEC: 'DEC',

    inc() {
        return {type: actions.INC}
    },

    dec() {
        return {type: actions.DEC}
    }

}

const initState = {
    number: 10
}

export const reduce = (state = initState, action) => {

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

export default actions;

