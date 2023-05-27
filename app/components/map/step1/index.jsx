import styles from './step1.module.css';
import React, { useState } from 'react';
import { InputBase, Radio, Group, Input } from '@mantine/core';
import { SelectMap } from './select';

const Step1 = () => {
  const [formType, setFormType] = useState('ИП');

  const handleFormTypeChange = (value) => {
    setFormType(value);
  };

  return (
    <table className={styles.table}>
      <tbody>
        <tr className={styles.tr}>
          <td>
            <label htmlFor="industry">Отрасль ведения хозяйственной деятельности</label>
          </td>
          <td>
            <InputBase placeholder={'ОАО Екатерина'} className={styles.input} id="industry" />
          </td>
        </tr>
        <tr className={styles.tr}>
          <td>Организационно-правовая форма</td>
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
        </tr>
        <tr>
          <td>
            <Select />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default React.memo(Step1);
