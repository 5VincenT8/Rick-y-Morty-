export const getCharactersByPage = async ({ idPage, name, gender, status }) => {
    // 1. Creamos un objeto de parámetros dinámico
    const params = new URLSearchParams({
        page: idPage,
        ...(name && { name }),
        ...(gender && { gender }),
        ...(status && { status }),
    });

    // 2. Construimos la URL automáticamente
    const url = `https://rickandmortyapi.com/api/character?${params.toString()}`;
    const res = await fetch(url);

    if (!res.ok) {
    throw new Error(`Error al obtener personajes en la página ${idPage}`);
    }

    return res.json();
};