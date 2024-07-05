import InterestCard from "@/components/InterestCard";
import styles from "./Interests.module.css";

const mockInterests = [
  "Actividades al aire libre",
  "Ciclismo",
  "VideoJuegos",
  "Yoga",
  "Cocinar",
  "Natacion",
  "Alimentacion saludable",
  "Carpinteria",
  "Conciertos",
  "Tocar la guitarra",
];

// mockapi call
async function getInterests(): Promise<string[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(mockInterests), 1000),
  );
}

export default async function Interests() {
  const interests = await getInterests();
  return (
    <div className={`${styles.interestsContainer} fadeIn`}>
      {interests.map((description, index) => (
        <InterestCard description={description} key={description + index} />
      ))}
    </div>
  );
}
