import getBooks from "./getBooks"

import Form from "./Form"
import BooksSearchList from "./BooksSearchList"
import { memo } from "react"
import { useDispatch } from "react-redux"
import { updateResults } from "./searchSlice"
import { useState } from "react"

const Query = memo(function () {

    const dispatch = useDispatch()
    const [queryOn , setQueryOn] = useState(false) 
    async function onInputChange(input: string) {
        if (!input) return
        setQueryOn(true)
        const data = await getBooks(input)

        if (data && "docs" in data) {
            dispatch(updateResults(data.docs))
        }
        setQueryOn(false)
    }

    return (
        <div>
            <Form queryOn = {queryOn}  onInputChange={onInputChange} />
            <BooksSearchList />
        </div>
    )
})

export default Query