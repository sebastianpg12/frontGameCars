import { TYPES_CREATE_TRACK, TYPES_LOAD_TRACKS } from "./types";

export const createTrack = (data) => ({
type:TYPES_CREATE_TRACK.CREATE_TRACK,
payload: data,
});

export const createTrackSucces = (event) =>  ({
type: TYPES_CREATE_TRACK.CREATE_TRACK_SUCCESS,
payload: event,
});

export const createTrackFailure = (messages) => ({
    type: TYPES_CREATE_TRACK.CREATE_TRACK_FAILURE,
    payload: messages,
  });

  export const loadingTrack = (id) => ({
    type: TYPES_LOAD_TRACKS.LOADING_TRACKS,
    payload: id,
  });
  
  export const loadingTrackSuccess = (track) => ({
    type: TYPES_LOAD_TRACKS.LOAD_TRACKS_SUCCESS,
    payload: track,
  });
  
  export const loadingTrackFailure = (error) => ({
    type: TYPES_LOAD_TRACKS.LOAD_TRACKS_FAILURE,
    payload: error,
  });