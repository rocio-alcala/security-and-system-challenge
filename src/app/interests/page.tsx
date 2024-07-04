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

export default function Interests() {
  return (
    <div className={`${styles.interestsContainer} fadeIn`}>
      {mockInterests.map((description, index) => (
        <InterestCard description={description} key={description + index} />
      ))}
    </div>
  );
}
