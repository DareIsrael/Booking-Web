import { createContext, useReducer } from "react"

export const TicketContext = createContext()

export const ticketReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TICKETS': 
        return {
            bookings: action.payload 
        }
        case 'CREATE_POST':
            return {
                bookings: [action.payload, ...state.bookings]
            }
        case 'DELETE_POST': 
        return {
            bookings: state.bookings.filter((booking) => booking._id !== action.payload._id)
        }    
            default:
            return state
    }
}

export const TicketContextProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(ticketReducer, {
        bookings: null
    })


    return (
    <TicketContext.Provider value={{...state, dispatch}}>
        {children}
    </TicketContext.Provider>
    )
}