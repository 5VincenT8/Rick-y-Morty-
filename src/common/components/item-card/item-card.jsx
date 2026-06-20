import { Link } from "react-router-dom";
import { useState } from "react"; 
import { Heart } from "lucide-react";
import styles from "./item-card.module.css";
import { useFavoritesStore } from "../../../features/characters/store/favorite-store";

export function ItemCard({character}){

    const { favs, toggleFavorite } = useFavoritesStore();

    const {
        id,
        name,
        image,
    }= character;

    const isFavorite = favs.some((f) => f.id === character.id);

    const handleToggle = (e) => {
        e.preventDefault();
        toggleFavorite(character); 
    };

    return(
    <>
        <Link to={`/character/${id}`}
        className={styles.container}>
        <button className={styles.heartButton} onClick={handleToggle}>
        <Heart fill={isFavorite ? "red" : "gray"} color="red" />
         </button>
        <div>
            <img src={image} alt={name}/>
        <div className={styles.info}>
            <h2>{name}</h2> 
        </div>
        </div>

        </Link>

    </>
    );

}