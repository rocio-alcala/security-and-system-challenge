import React from "react";
import styles from "../components/UserCard.module.css";
import Image from "next/image";

interface UserCardProps {
  name: string;
  img: string;
}

export default function UserCard({ name, img }: UserCardProps) {
  return (
    <div className={styles.userCard}>
      <Image
        src={img}
        width={100}
        height={100}
        alt="avatar image"
        className={styles.avatar}
      />
      <h1 className={styles.name}>{name}</h1>
    </div>
  );
}
