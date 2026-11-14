import { notFound } from "next/navigation";
import "./recipes.css";
import RecipesComponent from"@/components/Recipes/RecipesComponent";
import {  type Recipes } from "@/types/types";

export default async function RecipesPage() {
  const response = await fetch("https://dummyjson.com/recipes");

  if (!response.ok) {
    notFound();
  }

  if (response.status === 404) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  const recipes: Recipes = data.recipes;

  const recipesHeading = <h1>Oppskriftene våre</h1>
  /*<p>Her er det beste oppskrifter du trenger!</p>*/

  return (
    <RecipesComponent
    recipes={recipes}
    recipesHeading={recipesHeading}
    />
  );
}
