import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Recipe = {
    id: number;
    title: string;
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
            <section>
                {
                    recipes.map(recipe => (
                        <article key={recipe.id}>
                            <Image src={recipe.image} width={300} height={300} alt="" />
                            <h1>{recipe.title}</h1>
                            <p>{recipe.ingredients}</p>
                            <Link href={`/recipes/${recipe.id}`}>Velg</Link>
                        </article>
                    ))
                }
            </section>
        </>
    );
}

/*export default function RecipesPage() {
    return (
        <>
        <h1>Oppskrifter</h1>
        <p>Her er det beste oppskrifter du trenger!</p>
        </>
    )

}*/

/*
type Product = {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
};

type Products = Product[];

export default async function ProductsPage() {

    const response = await fetch("https://dummyjson.com/products");

    if(!response.ok) {
        notFound();
    }

    if(response.status === 404) {
        throw new Error("Something went wrong");
    }

    const data = await response.json();
    const products: Products = data.products;

    return (
        <>
            <h1>Products</h1>
            <section>
                {
                    products.map(product => (
                        <article key={product.id}>
                            <Image src={product.thumbnail} width={300} height={300} alt="" />
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <Link href={`/products/${product.id}`}>Buy</Link>
                        </article>
                    ))
                }
            </section>
        </>
    );
}*/