import styles from "./AboutMe.module.css";

const mockAboutMe =
  "Soy una persona entusiasta y curiosa, siempre en busca de nuevas experiencias y conocimientos. Me encanta conectar con personas de diferentes culturas y aprender de sus historias y tradiciones. Soy creativa, con una mente abierta y un corazón compasivo, siempre dispuesta a ayudar a los demás y a hacer del mundo un lugar mejor. Me apasiona el arte en todas sus formas y disfruto tanto de la tranquilidad de un buen libro como de la emoción de una aventura al aire libre.";

// mockapi call
async function getAboutMe(): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(mockAboutMe), 1000));
}

export default async function AboutMe() {
  const description = await getAboutMe();

  return <p className={`${styles.globo} fadeIn`}>{description}</p>;
}
