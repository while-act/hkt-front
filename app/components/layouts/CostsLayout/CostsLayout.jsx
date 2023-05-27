import { useState } from 'react';
import styles from './costsLayout.module.css';

export const CostsLayout = ({ children, step = 0 }) => {
  const [stateForm, setStateForm] = useState({
    projectName: { name },
  });

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.newCosts}>
        Создать новый расчет
      </button>
      <h2 className={styles.title}>Новый расчет</h2>
      <div className={styles.selectWrapper}>
        <button type="button" className={styles.buttonSelect}>
          Основное
          <span className={styles.pointer__line}></span>
        </button>
        <button type="button" className={styles.buttonSelect}>
          Объект
          <span className={styles.pointer__line}></span>
        </button>
        <button type="button" className={styles.buttonSelect}>
          Прочее
          <span className={styles.pointer__line}></span>
        </button>
      </div>
      <div className={styles.pointer}></div>
      {children}
      {step === 1 && (
        <button style={{ justifySelf: 'flex-end' }} type="button" className={styles.next}>
          Далее
        </button>
      )}
      {step !== 1 && (
        <div className={styles.wrapperButton}>
          <button type="button" className={styles.back}>
            Назад
          </button>
          <button type="button" className={styles.next}>
            Далее
          </button>
        </div>
      )}
    </div>
  );
};
