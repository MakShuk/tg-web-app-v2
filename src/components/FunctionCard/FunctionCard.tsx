import Image from "next/image";
import styles from "./FunctionCard.module.css";

const FunctionCard = ({ title, subtitle, imageAlt }: { title: string; subtitle?: string; imageAlt: string }) => {
  return (
    <div className={styles.card}>
      <Image
        src="/1.jpg"
        alt={imageAlt}
        fill
        className={styles.cardImage}
        priority
      />
      <svg className={`${styles.starIcon} relative z-10`} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
      </svg>
      <div className={`${styles.cardContent} relative z-10`}>
        <div className={styles.cardTitle}>{title}</div>
        {subtitle && <div className={styles.cardSubtitle}>{subtitle}</div>}
      </div>
    </div>
  );
};

export default FunctionCard;