import { Cocktail } from "@/types";
import { api } from "./axios"





export const getCocktailById = async(id: number)=>{
    const response = await api.get(`/lookup.php?i=${id}`)
        console.log(response)
    const drinks:Cocktail[] = response.data.drinks
    return drinks.at(0);
}
export const getCocktailsByName = async(name: string)=>{
    const response = await api.get(`/search.php?s=${name}`)
    const drinks:Cocktail[] = response.data.drinks
    return drinks;
}
export const getRandomCocktail = async()=>{
    const response = await api.get(`random.php`)
    const drinks:string = response.data.drinks.at(0).idDrink
    return drinks;
}