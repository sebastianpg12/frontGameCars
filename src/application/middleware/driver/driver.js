import { 
    createDriverFailure,
    createDriverSuccess } from "../../../application/actions/DriverActions";
import { TYPES_CREATE_DRIVER } from "../../actions/types";

const addDriverlow = ({ driverService }) => ({ dispatch }) => (next) =>
    async (action) => {
    next(action);
        if (action.type === TYPES_CREATE_DRIVER.CREATE_DRIVER){
            try {
                const event = await driverService.create(action.payload.data);
                dispatch(createDriverSuccess(event.data));
            } catch (error) {
                dispatch(createDriverFailure(error.message));
            }
        }
    };

    
const driverMiddleware = [addDriverlow];

export default driverMiddleware;
