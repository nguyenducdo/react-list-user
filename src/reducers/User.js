// const initState = {
//     id: 1,
//     username: 'dodododo',
//     role: 'admin'
// };

const initState = null;

export default function(state = initState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {...action.payload.user};

        case 'LOGOUT':
            return initState;

        case 'UPDATE':
            return {...state, ...action.payload.user};

        default:
            return state;
    }
}