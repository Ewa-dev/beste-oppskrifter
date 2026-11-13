import { type Recipe } from "@/types/types";

type Props = {
    params: Promise<{id: string}>
}

export default async function RecipePage({ params } : Props) {
    const { id } = await params;

    const response = await fetch(`https://dummyjson.com/recipes/${id}`);

    if(!response.ok) {
        throw new Error("Noe gikk galt!");
    }

    const recipe:Recipe = await response.json();

    return (
        <>
            <h1>{recipe.name}</h1>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
        </>
    );

}