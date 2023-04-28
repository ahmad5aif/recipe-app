import React from "react"
import { Link } from "react-router-dom"

export default function SearchResult({ result }) {

    return (
        <div className="categories-section container">

            {result === null ? <h1>Not Found</h1> : result.map((recipe) =>
                <div className="card">
                    <Link to={`/${recipe.idMeal}`}> <img src={recipe.strMealThumb} /> </Link>
                    <h1>{recipe.strMeal}</h1>
                </div>
            )
            }
        </div>
    )
}