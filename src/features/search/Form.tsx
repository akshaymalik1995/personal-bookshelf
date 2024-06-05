import Spinner from "./components/Spinner"
import { useState } from "react"
import { DebounceInput } from "react-debounce-input"
export default function Form(props: {queryOn : Boolean, onInputChange: (value: string) => void }) {
    const { onInputChange , queryOn} = props
    const [inputValue, setInputValue ]= useState("")

    function handleInput(value: string) {
        setInputValue(value)
        onInputChange(value)
        console.log(value)
    }


    return (
        <>
            {/* A input form to send request to the api */}
            <form onSubmit={e => e.preventDefault()} action="">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Search books</label>
                    <div className="border items-center flex space-x-2 w-full border-gray-300 text-gray-900 bg-blue-100 text-sm rounded-lg" >
                        <DebounceInput minLength={1} debounceTimeout={500} value={inputValue} onChange={(e) => handleInput(e.target.value)} type="text" id="first_name" className="w-full p-2.5 focus:outline-none active:bg-inherit focus:bg-inherit rounded-lg " placeholder="The lord of the rings" required />
                        {queryOn ? <div className="px-2 " > <Spinner /> </div> : ""}
                    </div>
                   
                </div>
            </form>
        </>
    )
}
