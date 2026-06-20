export const getCharacterById = async (idChar)=>{
    const res = await fetch(`https://rickandmortyapi.com/api/character/${idChar}`)
    if(!res.ok){
        throw new Error(`Error getting Character with id ${idChar}`);
    }

  return res.json();
}