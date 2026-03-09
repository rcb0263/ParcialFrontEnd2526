'use client';



import { CocktailCard } from "@/components/CocktailCard";
import { getCocktailById } from "@/lib/api/cocktails";
import { Cocktail } from "@/types";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./style.css";

const EstaRecibeName = () => {
  const {id} = useParams();

  const [cocktail, setCocktail]= useState<Cocktail|null>(null);
  const [error, setError]= useState<boolean>(false);
  const [loading, setLoading]= useState<boolean>(false);

  useEffect(()=>{
    setLoading(true)
    getCocktailById(Number(id)).then((res)=>{
        setLoading(false)
        setCocktail(res!);
    }).catch((e:AxiosError)=>{
        setLoading(false)
        setError(true)
    }).finally(()=>{

    })
  },[id])
  return (
    <div className="byIdCard">
        {cocktail && <CocktailCard cocktail={cocktail}/>}
        {loading && <h1>LOADING...</h1>}
        {error && <h1>ERROR</h1>}
    </div>
  );
}

export default EstaRecibeName;