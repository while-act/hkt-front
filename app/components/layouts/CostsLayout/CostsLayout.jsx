import styles from './costsLayout.module.css';

export const CostsLayout = ({ children, step }) => {
  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.newCosts}>
        Создать новый расчет
      </button>
      {children}
      {step === 1 && (
        <button type="button" className={styles.next}>
          Далее
        </button>
      )}
    </div>
  );
};
