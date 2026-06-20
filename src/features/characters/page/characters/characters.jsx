
import { useGetCharactersByPage } from "../../hooks/use-characters";
import { ItemCard } from "../../../../common/components/item-card/item-card";
import styles from "./characters.module.css"
import { useFilterStore } from "../../store/use-filter-store";
import { useEffect } from "react";


export function CharactersPage(){

    const { name, gender, status, page,setMaxPages } = useFilterStore();



    const {characters,loading,error}= useGetCharactersByPage({
        idPage: page,
        name,
        gender,
        status});
    
    useEffect(() => {
        if (characters?.info?.pages) {
            setMaxPages(characters.info.pages);
        } else if (error) {
            setMaxPages(1); 
        }
    }, [characters, error, setMaxPages]);

    if (error) return <h1>Error: {error.message || "Error al cargar los personajes"}</h1>;

    if (loading) return <h1>Loading...</h1>;

    const {
        results
    }=characters



    return (
    <div className={styles.container}>
        {characters.results.map((character)=>(
            <ItemCard key={character.id} character={character}/>
        ))}
    </div>
    );
}