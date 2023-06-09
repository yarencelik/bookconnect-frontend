import { BookDTO } from "@/dtos/Boot.dto";
import axios from "axios";


export async function apiGetBook(id : string) : Promise<BookDTO> {

    //TODO: axios request to backend
    /*
    const response = await axios.get(`https://api.bookconnect/book/${id}`,  {

    })

    return new BookDTO(
        response.data.id,
        response.data.title,
        response.data.author,
        response.data.genre,
        response.data.country,
        response.data.languaje,
        response.data.publicationDate,
        response.data.rating
    )
    */

    return new BookDTO(
        "id1",
        "Hamlet",
        "William Shakespeare",
        "Tragedy",
        "UK",
        "English",
        new Date(1600),
        4
    )
}