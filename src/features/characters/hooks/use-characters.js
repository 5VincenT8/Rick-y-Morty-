import { useEffect, useState } from "react";
import { getCharactersByPage } from "../services/get-characters-by-page";

export function useGetCharactersByPage({idPage, name, gender, status }){
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{

    setLoading(true);
    setError(null);

    getCharactersByPage({ idPage, name, gender, status })
    .then(setCharacters)
    .catch((err) => {
          console.error("❌ Error capturado en el hook:", err);
          setError(err);
      })
    .finally(()=>setLoading(false))
  },[idPage, name, gender, status]);

  return{
    characters,loading,error,
  };
}