

export default function Reducer(state = [], action){
    switch(action.type){
        case "ON_LOGIN":
            return {
                ...state,
                loggingIn: true,
                user: action.payload.userName
            }
    }

}