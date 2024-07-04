import styles from "./InterestCard.module.css";

interface InterestCardProps {
  description: string;
}

export default function InterestCard({ description }: InterestCardProps) {
  return <span className={styles.interest}>{description}</span>;
}
