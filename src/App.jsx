import Navbar from './components/nav.js';
import MyHero from './components/hero.js';
import Categories from './components/categories.js';
import Search from './components/search.js';
import Recipe from './components/recipe.js';
import Ctgrecipes from './components/ctgRecipe.js';
import About from './components/about.js';
import Error from './components/error.js';
import SearchedRecipe from './components/searchedRecipe.js';
import { SearchPage } from './pages/search/components/index.js';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Routes>
        <Route path='/' element={<MyHero />} />
        <Route path='/:mealId' element={<SearchedRecipe />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:id' element={<Ctgrecipes />} />
        <Route path='/categories/:id/:id' element={<Recipe />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  );
  }

export default App;


