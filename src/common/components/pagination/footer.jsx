import { useLocation } from "react-router-dom";
import { Pagination } from "../pagination/pagination";
import styles from "./footer.module.css";

export function Footer() {
  const location = useLocation(); 
  const isDetailPage = location.pathname.includes("/character/");

  return (
    <footer className={styles.footer}>
       {!isDetailPage && <Pagination />}
      <div className={styles.catchphraseContainer}>
       <img src="/wubalubadubdub.jpg" alt="frase" className={styles.icon} />
       <span className={styles.text}>wubalubadubdub</span>
       <img src="/wubalubadubdub.jpg" alt="frase" className={styles.icon} />
      </div>
   </footer>
  );
}