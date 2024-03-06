import styles from "./OfferListItem.module.scss";

const OfferListItem = ({ item }) => {
  return (
    <li>
      <div className={styles.offerListItem} id={item.id}>
        {item.isNew && <div className={styles.newItem}></div>}
        <h2 className={styles.itemTitle}>{item.name}</h2>
        {item.isNew && <p>(nowość)</p>}
      </div>
    </li>
  );
};

export default OfferListItem;
