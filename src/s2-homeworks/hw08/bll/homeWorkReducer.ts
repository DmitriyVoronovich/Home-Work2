import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy = [...state]
            return action.payload === 'up' ? stateCopy.sort((a, b) =>  b.name > a.name ? -1 : 0)
                : action.payload === 'down' ? stateCopy.sort((a, b) =>  b.name < a.name ? -1 : 0) : stateCopy// need to fix
        }
        case 'check': {
            return state.filter(item => item.age > action.payload) // need to fix
        }
        default:
            return state
    }
}
