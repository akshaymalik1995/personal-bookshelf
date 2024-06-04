import { IBook } from '../../app/types'
export default function BookCard(props: { book: IBook }) {
    const { book } = props


    return (
        <div className="">
            <div className="md:flex">
                <div className="p-8">

                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{book.title}</div>
                    <p className="mt-2 text-gray-500">{book.author_name && book.author_name.length ? book.author_name.join(" , ") : "Not Available"}</p>


                    <p className="mt-2 text-gray-500">Ratings: {book.ratings_average ? book.ratings_average.toFixed(2) : "Not available"}</p>



                    <p className="mt-2 text-gray-500">Published: {book.first_publish_year ? book.first_publish_year : "Not available"}</p>


                </div>
            </div>
        </div>
    )
}
