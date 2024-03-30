import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Welcome to BookAuction</p> 
      </div>

      <div className={styles.grid}>
        
        <Link href="/book1">
          <div className={styles.card}>
            <h2>
              Book 1 <span>-&gt;</span>
            </h2>
            <p>This is Book 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laudantium pariatur.</p>
          </div>
        </Link>

        <Link href="/book2">
          <div className={styles.card}>
            <h2>
              Book 2 <span>-&gt;</span>
            </h2>
            <p>This is Book 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laudantium pariatur.</p>
          </div>
        </Link>

        <Link href="/book3">
          <div className={styles.card}>
            <h2>
              Book 3 <span>-&gt;</span>
            </h2>
            <p>This is Book 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laudantium pariatur.</p>
          </div>
        </Link>

        <Link href="/book4">
          <div className={styles.card}>
            <h2>
              Book 4 <span>-&gt;</span>
            </h2>
            <p>This is Book 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laudantium pariatur.</p>
          </div>
        </Link>

        <Link href="/book5">
          <div className={styles.card}>
            <h2>
              Book 5 <span>-&gt;</span>
            </h2>
            <p>This is Book 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laudantium pariatur.</p>
          </div>
        </Link>

        <Link href="/book6">
          <div className={styles.card}>
            <h2>
              Book 6 <span>-&gt;</span>
            </h2>
            <p>This is Book 6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laudantium pariatur.</p>
          </div>
        </Link>

        <Link href="/book7">
          <div className={styles.card}>
            <h2>
              Book 7 <span>-&gt;</span>
            </h2>
            <p>This is Book 7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laudantium pariatur.</p>
          </div>
        </Link>

        <Link href="/book8">
          <div className={styles.card}>
            <h2>
              Book 8 <span>-&gt;</span>
            </h2>
            <p>This is Book 8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laudantium pariatur.</p>
          </div>
        </Link>
      </div>
  
    </main>
  );
}
