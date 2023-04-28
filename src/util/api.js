export const searchRecipe = (query) => {
    return new Promise((resolve, reject) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`).then((res) => res.json()).then(resolve).catch(reject)
    })
}