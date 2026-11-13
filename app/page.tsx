import Link from "next/link";
import styles from "./page.module.css";

export default function Home () {
    return (
        <>
        <h1>Velkommen til Beste Oppskrifter!</h1>
        <p>Her finner du oppskrifter til forskjellige anledninger! </p>
        <Link href="/recipes" className="recipeButton">Finn oppskrifter</Link>
        </> 
    )
}