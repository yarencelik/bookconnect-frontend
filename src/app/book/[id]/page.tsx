'use client'


import { BookDTO } from "@/dtos/Boot.dto"
import { apiGetBook } from "@/services/book-svc"
import { useEffect, useState } from "react"


export default function Book({params} : any) {

    const {
        id
    } = params

    const [book, setBook] = useState<BookDTO | null>(null)

    useEffect(() => {
        const getBook = async () => {
            try {
                const bookData = await apiGetBook(id)
                setBook(bookData)
            } catch (ex) {
                //TODO: show error
                console.error(ex)
            }
        }

        getBook()
    }, [])


    return (
        <>
            <div className="flex flex-col h-screen items-center">
                <div className="flex flex-col w-9/12 mt-20">
                    <h1 className="text-4xl ml-10">{book ? book.title : "..."}</h1>
                    <div className="flex flex-row w-100 mt-10 rounded-2xl p-10 items-center" style={{backgroundColor: "#EBEBEB"}}>
                        <div className="w-4/12 flex flex-col items-center">
                            <img className="max-h-80" src="https://upload.wikimedia.org/wikipedia/commons/d/df/Hamlet.jpg"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row m-px">
                                <div className="font-bold">Original Title: </div>
                                <div className="ml-3">{book ? book.title : "..."}</div>
                            </div>
                            <div className="flex flex-row m-px">
                                <div className="font-bold">Writter: </div>
                                <div className="ml-3">{book ? book.writter : "..."}</div>
                            </div>
                            <div className="flex flex-row m-px">
                                <div className="font-bold">Genre(s): </div>
                                <div className="ml-3">{book ? book.genre : "..."}</div>
                            </div>
                            <div className="flex flex-row m-px">
                                <div className="font-bold">Country: </div>
                                <div className="ml-3">{book ? book.country : "..."}</div>
                            </div>
                            <div className="flex flex-row m-px">
                                <div className="font-bold">Language: </div>
                                <div className="ml-3">{book ? book.language : "..."}</div>
                            </div>
                            <div className="flex flex-row m-px">
                                <div className="font-bold">Publication date: </div>
                                <div className="ml-3">{book ? book.publicationDate.toDateString() : "..."}</div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )

}