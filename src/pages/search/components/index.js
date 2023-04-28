import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom"
import { searchRecipe } from "../../../util/api.js";
import SearchResult from "../../../components/searchResult.js";

export const SearchPage = () => {

    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);

    const handleSearchRecipe = useCallback(async (query) => {
        const data = await searchRecipe(query);
        setResults(data.meals);
    }, [])

    useEffect(() => {
        if (searchParams.has("query")) {
            handleSearchRecipe(searchParams.get("query"))
        } else {
            setResults([]);
        }
    }, [searchParams, handleSearchRecipe]);

    return (
        <div>
            {results.length ? <SearchResult result={results} /> : <div>Loading</div>}
        </div>
    )
}