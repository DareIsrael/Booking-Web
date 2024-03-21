import { TicketContext } from "../context/TicketContext";

import { useContext } from "react";

export const useTicketContext = () => {
    const context = useContext( TicketContext )

    if (!context) {
        throw Error ('usePostContext must be used inside a WorkoutContextProvider ')
    }

    return context
}