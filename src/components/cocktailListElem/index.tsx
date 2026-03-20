import { api } from "@/lib/api/axios";
import { Cocktail } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react"
import "./style.css";
import { useLista } from "@/context/listaContext"

export const CocktailListElem =(params: {id?: string, cocktail?: Cocktail})=>{
  const [drink, setDrink] = useState<Cocktail|null>(params.cocktail ? params.cocktail :null)
  const {lista, addToList, deleteFromList} = useLista()
  const [favorito, setFavorito] = useState<boolean>(false)

  const id = params.id;
  
  useEffect(()=>{
    if(lista.includes(params.cocktail!.idDrink)==true){
      setFavorito(true)
    }
    {!params.cocktail && id && api.get(`search.php?s=${id}`).then((e)=>{setDrink(e.data)}).then(()=>{
        if(lista.includes(params.cocktail!.idDrink)==true){
          setFavorito(true)
        }
      }
    )}
    
  },[id, lista])
  return (
    <div>
      {drink && 
      <div className="Elem">
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
        </button>
            
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
