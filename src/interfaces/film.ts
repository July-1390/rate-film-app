export interface Actor {
    id: string
    photo_url: string
}

export interface Film {
    title: string
    title_ru: string
    poster_url: string
    release_year: string
    country: string
    genre: string
    description: string
    actors: Actor[]
}