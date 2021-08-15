import { TYPES_CREATE_TRACK, TYPES_LOAD_TRACKS } from "../../actions/types";

const intialState = {
    track: [],
    message: "",
  };

  export const trackReducer = (state = intialState, {type, payload}) =>{
    switch (type) {
        case TYPES_CREATE_TRACK.CREATE_TRACK:
          return state;
    
        case TYPES_CREATE_TRACK.CREATE_TRACK_SUCCESS:
          const aux = state.track;
          aux.push(payload);
          return { ...state, track: aux };
    
        case TYPES_CREATE_TRACK.CREATE_TRACK_FAILURE:
          return { ...state, message: payload };
    
        case TYPES_LOAD_TRACKS.LOADING_TRACKS:
          return state;
    
        case TYPES_LOAD_TRACKS.LOAD_TRACKS_SUCCESS:
          return { ...state, track: payload };
    
        case TYPES_LOAD_TRACKS.LOAD_TRACKS_FAILURE:
          return { ...state, message: payload };
    
        default:
          return state;
      }
  }