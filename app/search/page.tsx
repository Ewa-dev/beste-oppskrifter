import RecipesComponent from "@/components/Recipes/RecipesComponent";
import { Recipes } from "@/types/types";
import { ReactNode } from "react";

type Props ={
    searchParams: Promise<{ q?: string }>
}

export default async function SearchPage({ searchParams }: Props) {

    const { q } = await searchParams;

    if(!q) {
        return <h1>Du har ikke søkt etter noe oppskrifter</h1>
    }

    const response = await
    fetch(`https://dummyjson.com/recipes/search?q=${encodeURIComponent(q)}`);

    if(!response.ok) {
        throw new Error("Noe gikk galt!");
    }

    const data = await response.json();
    const recipes: Recipes = data.recipes;

    const recipesHeading: ReactNode = (
        <h1>Søk etter <span className="red">{q}</span></h1>
    );

    return (
        <RecipesComponent
        recipesHeading={recipesHeading}
        recipes={recipes}
        />
    );
}