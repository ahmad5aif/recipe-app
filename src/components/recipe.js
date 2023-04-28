import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Recipe() {
    const idMeal = useParams()
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal.id}`
    const [recipe, setRecipe] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [measures, setMeasures] = useState([])

    console.log(idMeal);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const fetchedData = await fetch(URL)
                const parsedResult = await fetchedData.json()
                const result = parsedResult.meals[0] // this is an object=>"result"
                setRecipe(result)

                Object.keys(result).forEach((key) => { // changes obj imto array of obj values
                    if (key.includes('strIngredient') && result[key] !== '' && result[key] !== null) {
                        setIngredients(prev => {
                            if (prev.length === 0) return [result[key]]
                            else return [...prev, result[key]]
                        })
                    }

                    if (key.includes('strMeasure') && result[key] !== '' && result[key] !== null) {
                        setMeasures(prev => {
                            if (prev.length === 0) return [result[key]]
                            else return [...prev, result[key]]
                        })
                    }

                })
            } catch (error) {
                console.log(error);
            }
        }
        fetchRecipe()
    }, [])

    return (
        <div className="recipe-Section container">
            {console.log(recipe)}
            <div className="recipe-name">
                <h1>{recipe.strMeal}</h1>
                <h2>{recipe.strArea} {recipe.strCategory} Dish</h2>
            </div>
            <div className="recipe-ditails">
                <img src={recipe.strMealThumb} alt="food.jpg" />
                <div className="ingredients">
                    {ingredients.map((item, index) => (
                        <div className="list">
                            <span>{item}</span>
                            <span>{measures[index]}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="recipe-instructions">
                <p>{recipe.strInstructions}</p>
            </div>
        </div>
    )
} 
