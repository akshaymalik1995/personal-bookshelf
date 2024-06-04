import Spinner from "./components/Spinner"
import { useEffect, useState } from "react"
export default function Form(props: {queryOn : Boolean, onInputChange: (value: string) => void }) {
    const { onInputChange , queryOn} = props
    const [inputValue, setInputValue ]= useState("")
    const [debouncedInputValue, setDebouncedInputValue] = useState("");

    function handleInput(value: string) {
        setInputValue(value)
    }


    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedInputValue(inputValue)
        }, 500)

        return () => clearTimeout(timeout)
    }, [inputValue])

    useEffect(() => {
        onInputChange(debouncedInputValue)
    }, [debouncedInputValue])

    return (
        <>
            {/* A input form to send request to the api */}
            <form onSubmit={e => e.preventDefault()} action="">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Search books</label>
                    <div className="border items-center flex space-x-2 w-full border-gray-300 text-gray-900 bg-blue-100 text-sm rounded-lg" >
                        <input value={inputValue} onChange={(e) => handleInput(e.target.value)} type="text" id="first_name" className="w-full p-2.5 focus:outline-none active:bg-inherit focus:bg-inherit rounded-lg " placeholder="The lord of the rings" required />
                        {queryOn ? <div className="px-2 " > <Spinner /> </div> : ""}
                    </div>
                   
                </div>
            </form>
        </>
    )
}
