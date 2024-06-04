import BookCard from './BookCard'
import { addToShelf } from '../shelf/shelfSlice'
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'
import { IStore } from '../../app/types'

export default function BooksSearchList() {

    const dispatch = useDispatch()
    const shelf = useSelector((state: IStore) => state.shelf)
    const booksList = useSelector((state: IStore) => state.search.results)
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " >
            {booksList.map(book =>
            (
                <div key={book.key} className='w-full justify-between flex flex-col  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-3' >
                    <BookCard book={book} />
                    {
                        book.key in shelf ? "" : (
                            <button onClick={() => dispatch(addToShelf(book))} type="button" className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-2 py-1 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to Shelf</button>
                        )
                    }

                </div>
            )
            )}
        </div>
    )
}
