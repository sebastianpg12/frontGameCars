import {AddEvent, AddEventFailure, AddEventSuccess} from "../../actions/CarActions";
import { carReducer } from "../../reducers/car/CarReducer";

const initialState = {
    events: [],
    error: null,
    loading: false,
    emails: []
}

describe('reducer car add test', ()=>{
    const dummyEvent = {
        
    }
})