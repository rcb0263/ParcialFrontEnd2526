'use client'
import { ListaProvider } from "@/context/listaContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [inputText, setInputText] = useState("")
  const [id, setId] = useState("")
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <button onClick={()=>router.push("/")}>main</button>
            <button onClick={()=>router.push("/favoritos")}>inutil</button>
            <button onClick={()=>router.push("/cocktail/"+Number(inputText))}>cocktail</button>
            <input 
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyDown={e=>{
                    if(e.key === "Enter"){
                        setInputText("")
                    }
                }}
            />
          <ListaProvider>
            {children}
          </ListaProvider>
      </body>
    </html>
  );
}
