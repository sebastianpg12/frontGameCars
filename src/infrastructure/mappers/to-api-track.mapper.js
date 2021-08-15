import { v4 as uuid } from "uuid";

export const toApiTrackMapper = (data) => ({
  trackId: uuid(),
  trackDistance: data.trackDistance,
  gameId: uuid(),
  podiumId: uuid(),
});
