import { useEffect, useState } from "react";
import { getCharacterById } from "../services/get-character-by-id";

export function useCharacter(id){
    const [character,setCharacter]=useState(null)
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(()=>{
        getCharacterById(id)
        .then((data)=>setCharacter(data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    },[id]);

    return{error,loading,character,};
}