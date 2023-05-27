import { forwardRef } from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';
import styles from './select.module.css';

const data = [
  {
    label: 'Bender Bending Rodríguez',
    value: 'Bender Bending Rodríguez',
  },
];

const SelectItem = forwardRef(({ label, description, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap>
      <div>
        <Text size="sm">{label}</Text>
        <Text size="xs" opacity={0.65}>
          {description}
        </Text>
      </div>
    </Group>
  </div>
));

export function SelectMap() {
  return (
    <Select
      className={styles.select}
      label="Choose employee of the month"
      placeholder="Выберите отрасль!"
      itemComponent={SelectItem}
      data={data}
      searchable
      maxDropdownHeight={400}
      nothingFound="Nobody here"
      filter={(value, item) =>
        item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}
