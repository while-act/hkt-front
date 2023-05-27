import { forwardRef } from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';
import styles from './select.module.css';

const data = [
  {
    label: 'Авиационная промышленность',
    value: 'Авиационная промышленность',
  },
  {
    label: 'Автомобильная промышленность',
    value: 'Автомобильная промышленность',
  },
  {
    label: 'Аддитивные технологии',
    value: 'Аддитивные технологии',
  },
  {
    label: 'Деревообрабатывающая',
    value: 'Деревообрабатывающая',
  },
  {
    label: 'Легкая промышленность',
    value: 'Легкая промышленность',
  },
  {
    label: 'Медицинская промышленность',
    value: 'Медицинская промышленность',
  },
  {
    label: 'Металлургия и металлообработка',
    value: 'Металлургия и металлообработка',
  },
  {
    label: 'Научная деятельность',
    value: 'Научная деятельность',
  },
  {
    label:
      'Общее машиностроение (в т.ч. оборудование пищевой переработки, дорожно-строительная и сельскохозяйственная техника)',
    value:
      'Общее машиностроение (в т.ч. оборудование пищевой переработки, дорожно-строительная и сельскохозяйственная техника)',
  },
  {
    label: 'Пищевая промышленность',
    value: 'Пищевая промышленность',
  },
  {
    label: 'Полиграфическая деятельность',
    value: 'Полиграфическая деятельность',
  },
  {
    label: 'Производство бытовой электроники и электрических приборов',
    value: 'Производство бытовой электроники и электрических приборов',
  },
  {
    label: 'Производство ж/д транспорта',
    value: 'Производство ж/д транспорта',
  },
  {
    label: 'Производство кокса и нефтепродуктов',
    value: 'Производство кокса и нефтепродуктов',
  },
  {
    label: 'Производство напитков',
    value: 'Производство напитков',
  },
  {
    label: 'Производство оружия, боеприпасов, спецхимии, военных машин',
    value: 'Производство оружия, боеприпасов, спецхимии, военных машин',
  },
  {
    label: 'Производство прочих товаров народного потребления',
    value: 'Производство прочих товаров народного потребления',
  },
  {
    label: 'Производство строительных материалов',
    value: 'Производство строительных материалов',
  },
  {
    label: 'Радиоэлектроника и приборостроение',
    value: 'Радиоэлектроника и приборостроение',
  },
  {
    label: 'Станкоинструментальная промышленность',
    value: 'Станкоинструментальная промышленность',
  },
  {
    label: 'Судостроение',
    value: 'Судостроение',
  },
  {
    label: 'Топливно-энергетический комплекс',
    value: 'Топливно-энергетический комплекс',
  },
  {
    label: 'Фармацевтическая промышленность',
    value: 'Фармацевтическая промышленность',
  },
  {
    label: 'Химическая промышленность',
    value: 'Химическая промышленность',
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
      placeholder="Выбрать"
      itemComponent={SelectItem}
      data={data}
      searchable
      maxDropdownHeight={300}
      nothingFound="Nobody here"
      filter={(value, item) => item.label.toLowerCase().includes(value.toLowerCase().trim())}
    />
  );
}