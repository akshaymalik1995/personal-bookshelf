
import { useSelector } from "react-redux"
import { IStore } from "../../app/types"
import { updateInputValue } from "./searchSlice"
import { useDispatch } from "react-redux"
import Spinner from "./components/Spinner"
export default function Form(props: {queryOn : Boolean, onInputChange: (value: string) => void }) {
    const { onInputChange , queryOn} = props
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
                    <div className="border items-center flex space-x-2 w-full border-gray-300 text-gray-900 px-2 text-sm rounded-lg" >
                        <input value={inputValue} onChange={(e) => handleInput(e.target.value)} type="text" id="first_name" className="w-full p-2.5 focus:outline-none rounded-lg " placeholder="The lord of the rings" required />
                        <div className="bg-white " >{queryOn ? <Spinner /> : ""}</div>
                    </div>
                   
                </div>
            </form>
        </>
    )
}
