export type ComparisionResultDTO = {
    "ytMusic track count" : number,
    "spotify track count" : number,
    "missing in Spotify"? : string[],
    "missing in youtube"? : string[],
    "out of order"? : string[]
}