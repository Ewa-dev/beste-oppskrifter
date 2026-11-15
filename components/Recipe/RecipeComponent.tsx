import "./RecipeComponent.css";
import { Recipe } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  recipe: Recipe;
};

export default function RecipeComponent({ recipe }: Props) {
  const grayPlaceholder =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150' fill='none'%3E%3Crect width='150' height='150' fill='%23E5E7EB'/%3E%3C/svg%3E";

  return (
    <article className="recipe-article">
      <Image src={recipe.image} width={150} height={150} alt="" />
      <p>{recipe.name}</p>
      <Link href={`/recipes/${recipe.id}`} className="recipeButton">
        Velg
      </Link>
    </article>
  );
}
