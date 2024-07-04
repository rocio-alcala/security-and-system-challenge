import React from "react";
import styles from "../components/Header.module.css";
import NavBar from "./NavBar";
import UserCard from "./UserCard";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <UserCard />
        <NavBar />
      </div>
    </header>
  );
}
