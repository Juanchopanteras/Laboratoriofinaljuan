import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id="header" className={styles.header}>
        <div>
          <h1>
            <span>
              Holi<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>Soy</span>
            </span>
            <br />
            <span>Juan Vasquez</span>
          </h1>
        </div>
      </header>
      <section id="info" className={styles.infoSection}>
        <img
          src="/Among-Us-Logo.png"
          alt="Imagen"
          className={styles.Image}
        />
        <div className={styles.infoContainer}>
          <span className={styles.title + "" + styles.yellowText}>Juan</span>
          <br />
          <span className={styles.title}>Vasquez</span>
        </div>
        <div className={styles.list}>
          <ul>
            <li>
              <span className={styles.grayText}>Edad:</span> 17
            </li>
            <li>
              <span className={styles.grayText}>Nacionalidad:</span> Guatemalteco
            </li>
            <li>
            <span className={styles.grayText}>Habilidades:</span> bueno en la chamba
            </li>
            <li>
            <span className={styles.grayText}>Lenguajes:</span> Español e ingles
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
