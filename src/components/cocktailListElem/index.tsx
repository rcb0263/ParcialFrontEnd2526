import { api } from "@/lib/api/axios";
import { Cocktail } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react"
import "./style.css";


export const CocktailListElem =(params: {id?: string, cocktail?: Cocktail})=>{
  const [drink, setDrink] = useState<Cocktail|null>(params.cocktail ? params.cocktail :null)

  const id = params.id;
  
  useEffect(()=>{
    {!params.cocktail && id && api.get(`search.php?s=${id}`).then((e)=>{setDrink(e.data)})}
  },[id])
  return (
    <div>
      {drink && 
      <div className="Elem">
        <Link href={`/cocktail/${drink?.idDrink}`}>
          <p/>
          {drink?.strDrinkThumb && <img className="image" src={drink?.strDrinkThumb}/>}
          <h1>{drink?.strDrink}</h1>
        </Link>
        
      </div>
      }
    </div>
        
  )
}
