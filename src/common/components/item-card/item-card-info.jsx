import { Link } from "react-router-dom";
import { useState } from "react"; 
import { Heart } from "lucide-react";
import styles from "./item-card-info.module.css";
import { useFavoritesStore } from "../../../features/characters/store/favorite-store";

export function ItemCardInfo({character}){

    const { favs, toggleFavorite } = useFavoritesStore();

    const {
        id,
        name: characterName,
        status,
        species,
        type,
        gender,
        origin:{name: originName},
        image,
    }=character

    const isFavorite = favs.some((f) => f.id === character.id);

    const handleToggle = (e) => {
        e.preventDefault();
        toggleFavorite(character); 
    };

    return(
    <>
        <div to={`/character/${id}`}
        className={styles.container}>
        <button className={styles.heartButton} onClick={handleToggle}>
        <Heart fill={isFavorite ? "red" : "gray"} color="red" />
         </button>
        <div>
            <img src={image} alt={name}/>
        <div className={styles.info}>
            <h2>Nombre: {characterName}</h2>
            <h2>Status: {status}</h2>
            <h2>Especie: {species}</h2>
            <h2>Tipo: {type}</h2>
            <h2>Genero: {gender}</h2>
            <h2>Origen: {originName}</h2>
        </div>
        </div>

        </div>

    </>
    );

}