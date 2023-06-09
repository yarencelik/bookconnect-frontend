export class BookDTO {

    id : string
    title: string
    writter: string
    genre: string
    country: string
    language: string
    publicationDate: Date
    rating: number


    constructor(
        id : string,
        title: string,
        writter: string,
        genre: string,
        country: string,
        language: string,
        publicationDate: Date,
        rating: number
    ) {
        this.id = id
        this.title = title
        this.writter = writter
        this.genre = genre
        this.country = country
        this.language = language
        this.publicationDate = publicationDate      
        this.rating = rating
    }

}