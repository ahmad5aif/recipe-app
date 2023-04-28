import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "./error";

export default function SearchedRecipe() {

    const idMeal = useParams()
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal.mealId}`
    const [recipe, setRecipe] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [measures, setMeasures] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const fetchedData = await fetch(URL)
                const parsedResult = await fetchedData.json()
                const result = parsedResult.meals[0] // this is an object=>"result"
                setRecipe(result)
                setShow(true)

                // const ingArray = Object.keys(result).filter((key)=> key.includes('strIngredient'))
                // const meaArray = Object.keys(result).filter((key)=> key.includes('strMeasure'))

                // ingArray.forEach((key)=>{
                //     if(result[key] !== '' && result[key] !== null)
                //     return setIngredients(result[key])
                //     // console.log(ingredients);
                // })

                // meaArray.forEach((key)=>{
                //     if(result[key] !== '' && result[key] !== ' '  && result[key] !== null)
                //     return console.log(result[key])
                // })


                // console.log(ingArray)
                // console.log(meaArray)

                // setIngredients(ingArray)
                // (meaArray === '' && meaArray === null) ? '' : setIngredients([meaArray])

                Object.keys(result).forEach((key) => { // changes obj into array of obj keys
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
    }, [URL])

    return (
        <div className="recipe-Section container">
            {!show ? <Error/> : 
            <>
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
            </>
}
        </div>

    )
} 
