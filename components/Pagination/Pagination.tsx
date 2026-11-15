import "./Pagination.css";
import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  return (
    <nav className="pagination">
      {currentPage > 1 && (
        <Link href={`/recipes/?page=${currentPage - 1}`} className="prevButton">
          ⬅️
        </Link>
      )}

      <div className="pageNumbers">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <Link
              key={page}
              href={`/recipes/?page=${page}`}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {currentPage < totalPages && (
        <Link href={`/recipes/?page=${currentPage + 1}`} className="nextButton">
          ➡️
        </Link>
      )}
    </nav>
  );
}
