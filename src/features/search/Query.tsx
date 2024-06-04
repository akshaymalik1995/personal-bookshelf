import getBooks from "./getBooks"

import Form from "./Form"
import BooksSearchList from "./BooksSearchList"
import { memo } from "react"
import { useDispatch } from "react-redux"
import { updateResults } from "./searchSlice"


const Query = memo(function () {

    const dispatch = useDispatch()
    async function onInputChange(input: string) {
        if (!input) return
        const data = await getBooks(input)
        if (data && "docs" in data) {
            console.log(data)
            dispatch(updateResults(data.docs))
        }
    }

    return (
        <div>
            <Form onInputChange={onInputChange} />
            <BooksSearchList />
        </div>
    )
})

export default Query