import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import "./recipes.css";

type Recipe = {
    id: number;
    name: string;
    ingredients: string;
    cuisine: string;
    image: string;   
};

type Recipes = Recipe[];

export default async function RecipesPage() {

    const response = await fetch("https://dummyjson.com/recipes");

    if(!response.ok) {
        notFound();
    }

    if(response.status === 404) {
        throw new Error("Something went wrong");
    }

    const data = await response.json();
    const recipes: Recipes = data.recipes;

    return (
        <>
            <h1>Oppskrifter</h1>
            <p>Her er det beste oppskrifter du trenger!</p>
            <section className="recipes">
                {
                    recipes.map(recipe => (
                        <article key={recipe.id}>
                            <Image src={recipe.image} width={150} height={150} alt="" />
                            <p>{recipe.name}</p>
                            <Link href={`/recipes/${recipe.id}`} className="recipeButton">Velg</Link>
                        </article>
                    ))
                }
            </section>
        </>
    );
}