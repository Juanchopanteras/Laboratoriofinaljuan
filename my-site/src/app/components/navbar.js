"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";

function Navbar() {
    const [selectedItem, setSelectedItem] = useState("Inicio");

    const handleItemClick = (item) => {
        setSelectedItem(item);
    }

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ Behavior: "smooth"});
        }

    
    };
    return(
        <nav className={styles.navbar}> 
            <div 
            className={styles.navbarItem + ` ${selectedItem === "Inicio" ? styles.selected : ""}`}
            onClick={() => handleItemClick("Inicio", "header")}>
                <a href="#header">Inicio</a>
            </div>
            <div 
            className={styles.navbarItem + ` ${selectedItem === "Habilidades" ? styles.selected : ""}`}
            onClick={() => handleItemClick("Habilidades", "info")}>
                <a href= "#info">Habilidades</a>
            </div>
        </nav>
    );
}

export default Navbar;
