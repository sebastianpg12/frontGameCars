import { createPlayerFailure, createPlayerSucces } from "../../../application/actions/PlayerActions";
import {
    CREATE_PLAYER,
  } from "../../../application/actions/types";


const addPlayerlow = ({playerService}) => ({dispatch}) => next => async (action) => {
    next(action)
    if (action.type === CREATE_PLAYER) {
        try {
            
            const event = await playerService.create(action.payload.data)
           dispatch(createPlayerSucces(event.data))
          
          
        } catch (error) {
            dispatch(createPlayerFailure(error.message))
        }
    }
}

const playerMiddleware = [
    addPlayerlow
]

export default playerMiddleware;