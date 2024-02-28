export type tracksDTO = {
    "id": number,
    "title": string,
    "duration": number | undefined,
    "artists": string,
    "album": string | undefined,
    "playlist_title": string,
    "artwork" : string,
    "provider"? : string
}