import styles from "./AboutUs.module.scss";
import { nanoid } from "nanoid";
import Employee from "./Employee/Employee";
import { employees } from "../../data/employeesOptions";

const AboutUs = () => {
  return (
    <section className={styles.sectionContainer} id="about-us">
      <div className={styles.aboutUsContainer}>
        <h1 className={styles.title}>Nasi specjaliści</h1>
        <ul className={styles.employeesList}>
          {employees.map((employee) => (
            <Employee key={nanoid()} employee={employee} />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default AboutUs;
