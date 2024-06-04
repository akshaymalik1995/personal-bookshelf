export interface IBook {
    key: string,
    title: string,
    author_name: string[]
    ratings_average?: number,
    first_publish_year?: number
}

export interface ISearchState {
    inputValue: string,
    results: IBook[] | []
}

export interface IStore {
    shelf: {
        [key: string]: IBook
    },
    search : ISearchState
}