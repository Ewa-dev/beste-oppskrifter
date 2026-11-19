import "./RecipeComponent.css";
import "./RecipeSkeleton.css";

export default function RecipeSkeleton() {
  return (
    <div role="status" aria-label="Laster produkter">
      <h1>Laster oppskriften...</h1>
      <div className="skeleton-recipe-container">
        <div className="skeleton-recipe-box">
          <div className="skeleton skeleton-recipe-title" />

          <div className="skeleton skeleton-recipe-subtitle" />
          <div className="skeleton skeleton-recipe-text" />
          <div className="skeleton skeleton-recipe-text" />

          <div className="skeleton skeleton-recipe-subtitle" />
          <div className="skeleton skeleton-recipe-text" />
          <div className="skeleton skeleton-recipe-text" />
          <div className="skeleton skeleton-recipe-text" />
        </div>

        <div className="skeleton skeleton-recipe-image" />
      </div>
    </div>
  );
}
