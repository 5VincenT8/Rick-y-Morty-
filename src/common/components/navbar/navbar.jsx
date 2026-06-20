import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "../button/button"
import styles from "./navbar.module.css"
import { Link, useLocation } from "react-router-dom"
import { useFilterStore } from "../../../features/characters/store/use-filter-store";
import { Pagination } from "../pagination/pagination";

export function Navbar(){
    const location = useLocation();
    const { setName, setGender, setStatus, nextPage, prevPage, page, maxPages} = useFilterStore();
    const isDetailPage = location.pathname.includes("/character/");

    return( 
        <>
        <header className={styles.header} >
            <img className={styles.logo} src="/logo.png" alt="logo de rick y morty"/>
            <nav className={styles.menu}>
                <Link to="./characters/page/1"><h3>Inicio</h3></Link>
                <Link to="/favoritos"><h3>favoritos </h3></Link>
            </nav>
            {!isDetailPage && (
            <div className={styles.filtrosWrapper}>
                <input type="text" placeholder="Buscar persojanes" 
                className={styles.input} 
                onChange={(e) => setName(e.target.value)}/>
                <div className={styles.filtros}>
                    <select onChange={(e) => setGender(e.target.value)}>
                    <option value="">Todos los géneros</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                    </select>

                    <select onChange={(e) => setStatus(e.target.value)}>
                    <option value="">Todos los status</option>
                    <option value="alive">alive</option>
                    <option value="dead">dead</option>
                    <option value="unknown">unknown</option>
                    </select>
                </div>
            </div>
            )}

            {!isDetailPage && <Pagination />}

        </header>
        </>
    )
}