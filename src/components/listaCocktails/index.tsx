import { Cocktail } from "@/types"
import { CocktailListElem } from "../cocktailListElem"
import "./style.css";


interface CocktailListProps {
    cocktails: Cocktail[]
}

export const CocktailList =(props: CocktailListProps)=>{
    const cocktails = props.cocktails
  return (
    <div className="CharacterList">
        {cocktails.map((e)=>{
            return (
            <CocktailListElem 
            key={e.idDrink} 
            cocktail={e}/>
            )})}
    </div>
        
  )
}
