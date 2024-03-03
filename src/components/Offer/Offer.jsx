import styles from "./Offer.module.scss";
import { offerItems } from "../../data/offerListOptions";
import OfferListItem from "./OfferListItem/OfferListItem";

const Offer = () => {
  return (
    <section className={styles.offerContainer} id="offer">
      <div className={styles.offerContent}>
        <h1 className={styles.title}>Czym zajmuje się nasza firma? </h1>
        <ul className={styles.offerList}>
          {offerItems.map((item) => (
            <OfferListItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offer;
