import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"

export default function Categories() {

    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
                const data = await res.json()
                // console.log(data.categories);
                setRecipes(data.categories.reverse())
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategories()
    }, [])

    return (
        <div className="categories-section container">
            <h1>Categories</h1>
            {recipes.map((recipe) =>
                <div className="card">
                    <Link to={recipe.strCategory}> <img src={recipe.strCategoryThumb} /> </Link>
                    <h1>{recipe.strCategory}</h1>
                </div>
            )}
        </div>
    )
}