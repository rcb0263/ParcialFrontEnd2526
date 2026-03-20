import { api } from "@/lib/api/axios";
import { Cocktail } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react"
import "./style.css";
import { useLista } from "@/context/listaContext"
import { getCocktailById } from "@/lib/api/cocktails";

export const CocktailListElem =(params: {id?: string, cocktail?: Cocktail})=>{
  const [drink, setDrink] = useState<Cocktail|null>(params.cocktail ? params.cocktail :null)
  const {lista, addToList, deleteFromList} = useLista()
  const [favorito, setFavorito] = useState<boolean>(false)

  const id = params.id;
  
  useEffect(()=>{
    if(params.cocktail?.idDrink && lista.includes(params.cocktail?.idDrink)==true){
      setFavorito(true)
    }
    {!params.cocktail && id && getCocktailById(Number(id)).then((e)=>{setDrink(e!)})}
  },[id, lista])
  return (
    <div>
      {drink && 
      <div className="Elem">
        {params.cocktail?.idDrink && 
        <button 
          onClick={()=>{
            if(favorito == false){
              setFavorito(true);
              addToList(params.cocktail!.idDrink)
            }else{
              setFavorito(false);
              deleteFromList(params.cocktail!.idDrink)
            }
          }}
        >
          {favorito !== true ? <p>añadir</p>: <p>eliminar</p>}
        </button>}
        
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
