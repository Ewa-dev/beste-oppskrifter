import Form from "next/form";
import "./SearchForm.css";

export default function SearchForm() {
    return (
        <Form 
        className="SearchForm"
        action="/search"
        >

            <input 
            type="search"
            name="q"
            required
            autoComplete="off"
            placeholder="Søk etter oppskrifter" 
            />

            <button type="submit">🔎</button>



        </Form>
    )
}