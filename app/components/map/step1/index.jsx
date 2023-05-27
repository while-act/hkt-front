import styles from './step1.module.css';
import React, { useState } from 'react';
import { InputBase, Radio, Group, Input } from '@mantine/core';
import { SelectMap } from './select';

const Step1 = () => {
  const [formType, setFormType] = useState('ИП');
  const [salaryEmployee, setSalaryEmployee] = useState('Средняя по отрасли');
  const [salarySumm, setSalarySumm] = useState(null);

  const handleFormTypeChange = (value) => {
    setFormType(value);
  };

  const changeSalary = (event) => {
    const onlyNumbers = event.target.value.replace(/[^0-9]/g, '');
    setSalarySumm(onlyNumbers);
  };

  const salaryRange = (value) => {
    setSalaryEmployee(value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="industry">Название проекта</label>

      <InputBase placeholder={'ОАО Екатерина'} className={styles.input} id="industry" />

      <div>Организационно-правовая форма</div>
      <Group className={styles.radio}>
        <Radio
          className={styles.radio}
          value="ИП"
          label="ИП"
          checked={formType === 'ИП'}
          onChange={() => handleFormTypeChange('ИП')}
        />
        <Radio
          className={styles.radio}
          value="Юр.лицо(ООО,АО)"
          label="Юр.лицо(ООО,АО)"
          checked={formType === 'Юр.лицо(ООО,АО)'}
          onChange={() => handleFormTypeChange('Юр.лицо(ООО,АО)')}
        />
      </Group>
      <label htmlFor="sphere">Выберите отрасль!</label>
      <SelectMap id="sphere" />
      <label>
        <div>Планируемая штатная численность</div>
        <span className={styles.importantMessage}>
          * Среднесписочная численность 75% компаний отрасли составляет не более ХХ.Х чел.
        </span>
      </label>

      <InputBase placeholder={'22,7'} className={styles.input} id="industry" />
      <div>Организационно-правовая форма</div>
      <Group className={styles.radio}>
        <Radio
          className={styles.radio}
          value="Средняя по отрасли"
          label="Средняя по отрасли"
          checked={salaryEmployee === 'Средняя по отрасли'}
          onChange={() => salaryRange('Средняя по отрасли')}
        />
        <Radio
          className={styles.radio}
          value="Высокая(выше 75% компаний отрасли)"
          label="Высокая(выше 75% компаний отрасли)"
          checked={salaryEmployee === 'Высокая(выше 75% компаний отрасли)'}
          onChange={() => salaryRange('Высокая(выше 75% компаний отрасли)')}
        />
        <Radio
          className={styles.radio}
          value="Ручной ввод"
          label="Ручной ввод"
          checked={salaryEmployee === 'Ручной ввод'}
          onChange={() => salaryRange('Ручной ввод')}
        />
        {salaryEmployee === 'Ручной ввод' && (
          <InputBase
            value={salarySumm > 0 ? salarySumm : ''}
            onChange={changeSalary}
            labelProps={{ style: { color: 'red' } }}
            label={'*Сумма указывается в РУБ'}
            placeholder={salarySumm < 0 ? 'Сумма не может быть отрицательной' : '24.999'}
            className={styles.input}
            id="industry"
          />
        )}
        {salarySumm && salarySumm < 24800 && (
          <span style={{ color: 'red' }}>{`Минимальная заработная плата МРОТ по москве - 24,800`}</span>
        )}
      </Group>
    </div>
  );
};

export default React.memo(Step1);
