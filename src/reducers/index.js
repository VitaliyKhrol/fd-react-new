import CONSTANTS from '../constants';
const { ACTIONS } = CONSTANTS;

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INPUT_CHANGE: {
            const { name, value } = action;
            return {
                ...state,
                [name]: value
            }
        }
    }
}