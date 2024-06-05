import getBooks from "./getBooks"

import Form from "./Form"
import BooksSearchList from "./BooksSearchList"
import { useDispatch } from "react-redux"
import { updateResults } from "./searchSlice"
import { useState } from "react"

const Query = function () {

    const dispatch = useDispatch()
    const [queryOn, setQueryOn] = useState(false)
    const [abortController, setAbortController] = useState(new AbortController())
    let signal = abortController.signal

    async function onInputChange(input: string) {
        if (!input) return
        setQueryOn(true)
        try {
            abortController.abort()
            const newAbortController = new AbortController()
            setAbortController(newAbortController)
            signal = newAbortController.signal

            const data = await getBooks(input, signal)
            if (data && "docs" in data) {
                dispatch(updateResults(data.docs))
                setQueryOn(false)
            }
        } catch (error) {
            console.error(error)
            setQueryOn(false)
        }


    }

    return (
        <div>
            <Form queryOn={queryOn} onInputChange={onInputChange} />
            <BooksSearchList />
        </div>
    )
}

export default Query