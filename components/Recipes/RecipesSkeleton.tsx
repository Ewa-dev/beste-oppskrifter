import "./RecipesComponent.css";
import "../Recipe/RecipeComponent.css";
import "./RecipesSkeleton.css";

export default function RecipesSkeleton() {
  return (
    <div role="status" aria-label="Laster produkter">
      <h1>Laster oppskrifter...</h1>
      <section className="recipes" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => (
          <div className="skeleton-article" key={index}>
            <div className="skeleton skeleton-image" />
            <div className="skeleton skeleton-name" />

            <div className="skeleton skeleton-link" />
          </div>
        ))}
      </section>
    </div>
  );
}
