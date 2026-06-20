import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../button/button";
import { useFilterStore } from "../../../features/characters/store/use-filter-store";
import styles from "./pagination.module.css"; // Crea este archivo si quieres estilos específicos

export function Pagination() {
  const { page, maxPages, nextPage, prevPage } = useFilterStore();

  return (
    <div className={styles.pagination}>
      <Button onClick={prevPage} disabled={page === 1}>
        <ArrowLeft />
      </Button>
      <p className={styles.pageNumber}>{page}</p>
      <Button onClick={nextPage} disabled={page >= maxPages}>
        <ArrowRight />
      </Button>
    </div>
  );
}