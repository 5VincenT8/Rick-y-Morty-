import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../button/button";
import { useFilterStore } from "../../../features/characters/store/use-filter-store";
import styles from "./pagination.module.css"; // Crea este archivo si quieres estilos específicos
import { useLocation } from "react-router-dom";
import { useFavoritesStore } from "../../../features/characters/store/favorite-store";

export function Pagination() {
  const location = useLocation();
  const isFavoritesPage = location.pathname === "/favoritos";
  
  const { page, maxPages, nextPage, prevPage } = useFilterStore();
  const { favs, favPage, setFavPage } = useFavoritesStore();
  

  const totalFavPages = Math.ceil(favs.length / 20);

 
  const currentPage = isFavoritesPage ? favPage : page;
  const totalPages = isFavoritesPage ? totalFavPages : maxPages;
  
  const handleNext = () => {
    if (isFavoritesPage) setFavPage(favPage + 1);
    else nextPage();
  };

  const handlePrev = () => {
    if (isFavoritesPage) setFavPage(favPage - 1);
    else prevPage();
  };

 return (
    <div className={styles.pagination}>
      <Button onClick={handlePrev} disabled={currentPage === 1}>
        <ArrowLeft />
      </Button>
      <p className={styles.pageNumber}>{currentPage}</p>
      <Button onClick={handleNext} disabled={currentPage >= totalPages}>
        <ArrowRight />
      </Button>
    </div>
  );
}