import { ItemCard } from "../../../../common/components/item-card/item-card";
import { useFavoritesStore } from "../../store/favorite-store";
import styles from './favorites.module.css';


export function FavoritesPage(){
  const { favs } = useFavoritesStore();

    return (
    <div className={styles.container}>
      {favs.length === 0 ? (
        <h1>No tienes personajes favoritos aún.</h1>
      ) : (
        favs.map((character) => (
          <ItemCard key={character.id} character={character} />
        ))
      )}
    </div>
  );
}