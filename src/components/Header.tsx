import React from "react";
import styles from "../components/Header.module.css";
import NavBar from "./NavBar";
import UserCard from "./UserCard";

interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

// randomuser api is used to get a random user name and image and mock an api request,
// the seed=security param return always the same user
async function getUser() {
  const res = await fetch(
    "https://randomuser.me/api/?results=1&inc=name,picture,id&seed=security&noinfo",
  );
  if (!res.ok) {
    throw new Error("Error en la busqueda de datos");
  }
  const jsonRes = await res.json();
  return jsonRes.results[0];
}

export default async function Header() {
  // nextjs allows us to do the fetching directly on the server using async/await
  // and memoized the request to fetch the data from others components
  const user: User = await getUser();

  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <UserCard
          name={`${user.name.first} ${user.name.last}`}
          img={user.picture.medium}
        />
        <NavBar />
      </div>
    </header>
  );
}
