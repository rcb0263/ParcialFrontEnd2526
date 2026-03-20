'use client';

import { useRouter } from "next/navigation";
import './../style.css'
import { useLista } from "@/context/listaContext";
import { CocktailListElem } from "@/components/cocktailListElem";
const Page = () => {

  const {lista} = useLista()
  const router = useRouter()

  return (
    <div className="Lista">
      <h1>Favoritos</h1>
        <button onClick={async ()=>{
            router.push(`/`)
        }}>Principal</button>
        {lista.map(e=><CocktailListElem key={e} id={e}/>)}
    </div>
  );
}

export default Page;
