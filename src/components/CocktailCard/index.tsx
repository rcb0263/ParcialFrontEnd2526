import { Cocktail } from "@/types";
import './style.css'

export const CocktailCard=(params: {cocktail: Cocktail})=>{
    const cocktail = params.cocktail
  return (
    <div className="Card">
      {/*imagen */}
      {cocktail.strDrinkThumb && (
        <img className="image" src={cocktail.strDrinkThumb}/>
      )}

      {/*nombre */}
      {cocktail.strDrink && <h2>{cocktail.strDrink}</h2>}

      {/* categoria*/}
      {cocktail.strCategory && <h3>Category: {cocktail.strCategory}</h3>}

      {/* alcoholica*/}
      {cocktail.strAlcoholic && <h3>Alcoholic: {cocktail.strAlcoholic}</h3>}

      {/* tipo de vaso*/}
      {cocktail.strGlass && <h3>Glass: {cocktail.strGlass}</h3>}

      {/* Instrucciones en ingles*/}
      {cocktail.strInstructions && <h4>Instructions: {cocktail.strInstructions}</h4>}

      {/*Ingredientes */}
      {cocktail.strIngredient1 && <h4>Ingredient 1: {cocktail.strIngredient1}</h4>}
      {cocktail.strIngredient2 && <h4>Ingredient 2: {cocktail.strIngredient2}</h4>}
      {cocktail.strIngredient3 && <h4>Ingredient 3: {cocktail.strIngredient3}</h4>}
      {cocktail.strIngredient4 && <h4>Ingredient 4: {cocktail.strIngredient4}</h4>}
      {cocktail.strIngredient5 && <h4>Ingredient 5: {cocktail.strIngredient5}</h4>}
      {cocktail.strIngredient6 && <h4>Ingredient 6: {cocktail.strIngredient6}</h4>}
      {cocktail.strIngredient7 && <h4>Ingredient 7: {cocktail.strIngredient7}</h4>}
      {cocktail.strIngredient8 && <h4>Ingredient 8: {cocktail.strIngredient8}</h4>}
      {cocktail.strIngredient9 && <h4>Ingredient 9: {cocktail.strIngredient9}</h4>}
      {cocktail.strIngredient10 && <h4>Ingredient 10: {cocktail.strIngredient10}</h4>}
      {cocktail.strIngredient11 && <h4>Ingredient 11: {cocktail.strIngredient11}</h4>}
      {cocktail.strIngredient12 && <h4>Ingredient 12: {cocktail.strIngredient12}</h4>}
      {cocktail.strIngredient13 && <h4>Ingredient 13: {cocktail.strIngredient13}</h4>}
      {cocktail.strIngredient14 && <h4>Ingredient 14: {cocktail.strIngredient14}</h4>}
      {cocktail.strIngredient15 && <h4>Ingredient 15: {cocktail.strIngredient15}</h4>}

      {/*cocktail.strMeasure1 && <p>Measure 1: {cocktail.strMeasure1}</p>}
      {cocktail.strMeasure2 && <p>Measure 2: {cocktail.strMeasure2}</p>}
      {cocktail.strMeasure3 && <p>Measure 3: {cocktail.strMeasure3}</p>}
      {cocktail.strMeasure4 && <p>Measure 4: {cocktail.strMeasure4}</p>}
      {cocktail.strMeasure5 && <p>Measure 5: {cocktail.strMeasure5}</p>}
      {cocktail.strMeasure6 && <p>Measure 6: {cocktail.strMeasure6}</p>}
      {cocktail.strMeasure7 && <p>Measure 7: {cocktail.strMeasure7}</p>}
      {cocktail.strMeasure8 && <p>Measure 8: {cocktail.strMeasure8}</p>}
      {cocktail.strMeasure9 && <p>Measure 9: {cocktail.strMeasure9}</p>}
      {cocktail.strMeasure10 && <p>Measure 10: {cocktail.strMeasure10}</p>}
      {cocktail.strMeasure11 && <p>Measure 11: {cocktail.strMeasure11}</p>}
      {cocktail.strMeasure12 && <p>Measure 12: {cocktail.strMeasure12}</p>}
      {cocktail.strMeasure13 && <p>Measure 13: {cocktail.strMeasure13}</p>}
      {cocktail.strMeasure14 && <p>Measure 14: {cocktail.strMeasure14}</p>}
      {cocktail.strMeasure15 && <p>Measure 15: {cocktail.strMeasure15}</p>*/}

    </div>
        
  )
}
