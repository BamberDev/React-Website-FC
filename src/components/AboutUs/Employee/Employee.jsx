import styles from "./Employee.module.scss";

const Employee = ({ employee }) => {
  return (
    <li className={styles.employeeList}>
      <div className={styles.employee}>
        <img
          className={styles.employeeImage}
          src={employee.image}
          alt={employee.name}
        />
      </div>
      <div className={styles.employeeDetails}>
        <h2 className={styles.employeeName}>{employee.name}</h2>
        <p className={styles.employeeDescription}>{employee.description}</p>
      </div>
    </li>
  );
};

export default Employee;
