import Link from "next/link";
import React from "react";
import styles from "../components/Footer.module.css";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright 2024 @rocio-alcala</p>
      <Link
        href={"https://github.com/rocio-alcala"}
        className={styles.iconContainer}
      >
        <FaGithub size={25} className={styles.icon} />
      </Link>
    </footer>
  );
}
