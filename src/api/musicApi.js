import { getJson, patchJson, putJson, postJson, deleteJson } from './baseApi'

export const fetchArtist = artist => getJson(`https://itunes.apple.com/search?media=music&entity=musicArtist&term=${artist}`)
export const fetchSongsByArtist = artist => getJson(`https://itunes.apple.com/search?media=music&entity=song&term=${artist}`)