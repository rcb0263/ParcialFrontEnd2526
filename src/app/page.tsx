'use client';

import { CocktailList } from "@/components/listaCocktails";
import { getCocktailById, getCocktailsByName, getRandomCocktail } from "@/lib/api/cocktails";
import { Cocktail } from "@/types";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import './style.css'
import { useLista } from "@/context/listaContext";
const Page = () => {

  const [cocktails, setCocktails]= useState<Cocktail[]|null>(null);
  const [name, setName]= useState<string>('');
  const [FinalName, setFinalName]= useState<string>('');
  const [error, setError]= useState<boolean>(false);
  const [loading, setLoading]= useState<boolean>(false);

  const {lista} = useLista()

  useEffect(()=>{
    if(name != ''){
      setLoading(true)
      getCocktailsByName(String(name)).then((res)=>{
          setLoading(false)
          setCocktails(res);
      }).catch((e:AxiosError)=>{
          setLoading(false)
          setError(true)
      }).finally(()=>{

      })
    }
  },[FinalName])

  const router = useRouter()
  return (
    <div className="Lista">
      <h1>Busqueda de cocktails</h1>
      <button onClick={async ()=>{
        router.push(`/favoritos`)
      }}>Favoritos</button>

      <button onClick={async ()=>{
        const id = await getRandomCocktail()
        console.log(id)
        router.push(`/cocktail/${id}`)
      }}>Dime algo bonito</button>
      <p/>
      <p>LISTA: {lista.map(e=><p key={e}>{e}</p>)}</p>
      <div>
        <input
          value={name} 
          onChange={(e)=>{
          setName(e.target.value)
          }}
        />
        <button
          onClick={()=>{
          setFinalName(name)
          }}
        >Search</button>
      </div>
        {cocktails && <CocktailList cocktails={cocktails}/>}
        {loading && <h1>LOADING...</h1>}
        {error && <h1>ERROR</h1>}
    </div>
  );
}

export default Page;
