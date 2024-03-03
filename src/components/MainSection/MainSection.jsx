import styles from "./MainSection.module.scss";

const MainSection = () => {
  return (
    <section className={styles.mainSectionContainer}>
      <div className={styles.backgroundContainer}>
        <div className="container">
          <div className={styles.mainSectionContent}>
            <h1 className={styles.title}>
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <p>Nie wierz nam na słowo - sprawdź</p>
            <button className={styles.offerButton}>Oferta</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainSection;
