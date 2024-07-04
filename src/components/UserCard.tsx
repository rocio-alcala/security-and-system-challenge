import React from "react";
import styles from "../components/UserCard.module.css";
import Image from "next/image";

// https://randomuser.me/documentation#format
export default function UserCard() {
  return (
    <div className={styles.userCard}>
      <Image
        src="https://thispersondoesnotexist.com"
        width={100}
        height={100}
        alt="avatar image"
        className={styles.avatar}
      />
      <h1 className={styles.name}>Hugo Mescherano</h1>
    </div>
  );
}
