import { ItemCard } from "../../../../common/components/item-card/item-card";
import { useFavoritesStore } from "../../store/favorite-store";
import styles from './favorites.module.css';


export function FavoritesPage(){
  const { favs, favPage } = useFavoritesStore();
  const ITEMS_PER_PAGE = 20;
  const paginatedFavs = favs.slice((favPage - 1) * ITEMS_PER_PAGE, favPage * ITEMS_PER_PAGE);
    return (
    <div className={styles.container}>
      {favs.length === 0 ? (
        <h1>No tienes personajes favoritos aún.</h1>
      ) : (
        paginatedFavs.map((character) => (
          <ItemCard key={character.id} character={character} />
        ))
      )}
    </div>
  );
}