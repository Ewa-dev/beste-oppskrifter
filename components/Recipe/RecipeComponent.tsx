import "./RecipeComponent.css";
import { Recipe } from "@/types/types";
import Image from "next/image";
import Link from "next/link";


type Props = {
    recipe: Recipe;
}

export default function RecipeComponent({ recipe }: Props) {
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