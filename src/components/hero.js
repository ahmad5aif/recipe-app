import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MyHero() {

    const URL = 'https://www.themealdb.com/api/json/v1/1/random.php'
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [link, setLink] = useState('')

    useEffect(() => {
        const randomRecipe = async () => {
            try {
                const data = await fetch(URL)
                    .then(res => res.json())
                    .then(res => res.meals[0])
                setTitle(data.strMeal)
                setImg(data.strMealThumb)
                setLink(data.idMeal)

            } catch (error) {
                console.log(error);
            }
        }
        randomRecipe()
    }, [])
    return (
        <div className="myHero container">
            <div className="heroImg">
            <Link to={link}> <img width='250px' src={img} /> </Link>
            </div>
            <div className="heroContent">
                <h2>Craving for some delicious</h2>
                <h3>Try now our dish of the moment!!</h3>
                <h1>{title}</h1>
            </div>
        </div>
    )
}