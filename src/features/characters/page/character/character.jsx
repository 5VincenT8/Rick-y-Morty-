import { useParams } from "react-router-dom";
import { useCharacter } from "../../hooks/use-character";
import styles from "../characters/characters.module.css";
import { ItemCardInfo } from "../../../../common/components/item-card/item-card-info";

export function CharacterPage(){
    const{id: urlId}= useParams();

    const{character, loading, error}= useCharacter(urlId);

    if (error) return <h1>{error}</h1>;

    if (loading) return <h1>Loading...</h1>;

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

    return (
    <div className={styles.container}>
        <ItemCardInfo key={character.id} character={character}/>
    </div>
    );

}