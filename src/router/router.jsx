import { createBrowserRouter } from "react-router-dom";
import { InfoLayout } from "../common/layouts/info-layout";
import { Characters } from "../app/characters/characters";
import { Favorites } from "../app/characters/favorites";
import { Character } from "../app/characters/character";


export const router = createBrowserRouter([
{
    path:"/",
    Component: InfoLayout,
    children:[
        {
            path: "characters/page/:idPage",
            Component: Characters, 
        },
        {
            path: "favoritos",
            Component: Favorites,
        },
        {
            path:"character/:id",
            Component: Character,
        }
    ],
},

]);