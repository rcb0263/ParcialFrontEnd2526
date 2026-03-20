'use client';

import { useRouter } from "next/navigation";
import './../style.css'
import { useLista } from "@/context/listaContext";
const Page = () => {

  const {lista} = useLista()
  const router = useRouter()

  return (
    <div className="Lista">
      <h1>Favoritos</h1>
        <button onClick={async ()=>{
            router.push(`/`)
        }}>Pricipal</button>
        {lista.map(e=><p key={e} >{e}</p>)}
    </div>
  );
}

export default Page;
