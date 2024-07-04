"use client";

import { usePathname } from "next/navigation";
import styles from "../components/NavBar.module.css";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  const currentPath = usePathname();

  return (
    <nav className={styles.nav}>
      <NavBarItem href="/about-me" active={currentPath === "/about-me"}>
        Sobre mi
      </NavBarItem>
      <NavBarItem href="/interests" active={currentPath === "/interests"}>
        Intereses
      </NavBarItem>
      <NavBarItem href="/contact" active={currentPath === "/contact"}>
        Contacto
      </NavBarItem>
    </nav>
  );
}
