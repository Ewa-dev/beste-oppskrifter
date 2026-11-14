import { ReactNode} from "react";
import { Recipes } from "@/types/types";
import "./RecipesComponent.css";
import RecipeComponent from "../Recipe/RecipeComponent";

type Props = {
  recipes: Recipes;
  recipesHeading: ReactNode;
}

export default function RecipesComponent({recipes, recipesHeading}: Props) {

  return (
    <>
    {recipesHeading}
    <section className="recipes">
      {
        recipes.map(recipe => (
          <RecipeComponent
          key={recipe.id}
          recipe={recipe}
          />
        ))
      }
      </section>
      </>
  );
}
