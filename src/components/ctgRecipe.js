import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

export default function Ctgrecipes() {

    const category = useParams()
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.id}`
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch(URL)
                const data = await res.json()

                // console.log(data.meals);
                setRecipes(data.meals)
            } catch (error) {
                console.log(error);
            }
        }
        fetchRecipes()
    }, [])

    return (
        <div className="categories-section container">
            <h1>Serving You Some {category.id} Dishes</h1>
            {recipes.map((recipe) =>
                <div className="card">
                    <Link to={recipe.idMeal}> <img src={recipe.strMealThumb} /> </Link>
                    <h1>{recipe.strMeal}</h1>
                </div>
            )}
        </div>
    )
}