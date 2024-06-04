
import { useSelector } from "react-redux"
import { IStore } from "../../app/types"
import { updateInputValue } from "./searchSlice"
import { useDispatch } from "react-redux"
export default function Form(props: { onInputChange: (value: string) => void }) {
    const { onInputChange } = props
    const dispatch = useDispatch()
    const inputValue = useSelector((state: IStore) => state.search.inputValue)
    function handleInput(value: string) {
        dispatch(updateInputValue(value))
        onInputChange(value)
    }
    return (
        <>
            {/* A input form to send request to the api */}
            <form onSubmit={e => e.preventDefault()} action="">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search books</label>
                    <input value={inputValue} onChange={(e) => handleInput(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="The lord of the rings" required />
                </div>
            </form>
        </>
    )
}
