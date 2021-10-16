export interface Actor {
    id: string
    photo_url: string
}

export interface Rating {
    score_with_sign: string
    votes_count: number
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
    rating: Rating
}





