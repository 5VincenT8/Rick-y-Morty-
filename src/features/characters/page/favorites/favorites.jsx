import { ItemCard } from "../../../../common/components/item-card/item-card";
import { useFavoritesStore } from "../../store/favorite-store";



export function FavoritesPage(){
  const { favs } = useFavoritesStore();

    return (
    <div className="container">
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