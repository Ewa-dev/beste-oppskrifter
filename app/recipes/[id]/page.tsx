import { type Recipe } from "@/types/types";
import "./id-recipe.css";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function RecipePage({ params }: Props) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/recipes/${id}`);

  if (!response.ok) {
    throw new Error("Noe gikk galt!");
  }

  const recipe: Recipe = await response.json();

  return (
    <div className="recipe-container">
      <div className="recipe-box">
        <h1>{recipe.name}</h1>
        <h2>Ingredienser:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2>Fremgangsmåte:</h2>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>

      <div className="img-box">
        <Image src={recipe.image} width={300} height={300} alt={recipe.name} />
      </div>
    </div>
  );
}
