import "./recipes.css";
import RecipesComponent from "@/components/Recipes/RecipesComponent";
import { ReactNode } from "react";
import Pagination from "@/components/Pagination/Pagination";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

const RECIPES_PER_PAGE = 12;
const RECIPES_API = "https://dummyjson.com/recipes";

export default async function RecipesPage({ searchParams }: Props) {
  const { page } = await searchParams;

  let pageNumber = 1;

  if (page) {
    pageNumber = parseInt(page);
  }
  const numSkip = (pageNumber - 1) * RECIPES_PER_PAGE;

  const response = await fetch(
    `${RECIPES_API}?skip=${numSkip}&limit=${RECIPES_PER_PAGE}`,
  );

  if (!response.ok) {
    throw new Error("Noe gikk galt!");
  }

  const { recipes, total } = await response.json();

  const totalPages = Math.ceil(total / RECIPES_PER_PAGE);

  const heading: ReactNode = <h1>Oppskriftene våre</h1>;

  return (
    <>
      <RecipesComponent recipes={recipes} recipesHeading={heading} />
      <Pagination currentPage={pageNumber} totalPages={totalPages} />
    </>
  );
}
