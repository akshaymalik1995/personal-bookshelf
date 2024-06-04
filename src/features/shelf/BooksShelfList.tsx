
import BookCard from '../search/BookCard'
import { removeFromShelf } from './shelfSlice'
import { useSelector } from 'react-redux'
import { IStore } from '../../app/types'
import { useDispatch } from 'react-redux'

export default function BooksShelfList() {

    const dispatch = useDispatch()
    const shelf = useSelector((state: IStore) => state.shelf)
    const booksList = Object.keys(shelf).map(key => shelf[key])
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " >
            {booksList.length ? (booksList.map(book =>
            (
                <div key={book.key} className='w-full flex justify-between flex-col  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-3' >
                    <BookCard book={book} />
                    <button onClick={() => dispatch(removeFromShelf(book.key))} type="button" className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-2 py-1 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Remove</button>
                </div>

            )
            )) : (
                <div className='my-8' >No books in the shelf.</div>
            )}
        </div>
    )
}
