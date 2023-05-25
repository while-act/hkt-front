import React, { useEffect, useRef, useState } from 'react';
import styles from './map.module.css';
import MapImage from './MapImage';

const regions = [
  'Troickiy',
  'Zelenogradskiy',
  'Ug-Vostok',
  'Sever-Zapad',
  'Zapad',
  'Vostok',
  'Ug',
  'Sever',
  'Center',
  'NewMoskow',
  'Ug-Zapad',
  'Sever-Vostok',
];

const ruRegions = {
  Troickiy: 'Троицкий',
  Zelenogradskiy: 'Зеленоградский',
  'Ug-Vostok': 'Юго-Восточный',
  'Sever-Zapad': 'Северо-Западный',
  Zapad: 'Западный',
  Vostok: 'Восточный',
  Ug: 'Южный',
  Sever: 'Северный',
  Center: 'Центральный',
  NewMoskow: 'Новомосковский',
  'Ug-Zapad': 'Юго-Западный',
  'Sever-Vostok': 'Северо-Восточный',
};

export const Map = () => {
  const mapRef = useRef(null);
  const regionElementsRef = useRef({});
  const [currentRegion, setCurrentRegion] = useState();
  const [activeRegion, setActiveRegion] = useState(false);
  const [idOfRegion, setIdOfRegion] = useState(false);
  const [title, setTitle] = useState('Вы ещё не выбрали регион для инвестиций!');

  useEffect(() => {
    const handleMouseOver = (e) => {
      const { id } = e.target;

      if (regions.includes(id)) {
        regionElementsRef.current[id].forEach((el) => {
          el.style.fill = '#2859FF';
          el.style.filter = 'grayscale(0)';
        });
      }
    };

    const handleMouseOut = (e) => {
      const { id } = e.target;
      if (regions.includes(id)) {
        setCurrentRegion(ruRegions[id]);
        if (idOfRegion !== id) {
          regionElementsRef.current[id].forEach((el) => {
            el.style.fill = '#fff';
            el.style.filter = 'grayscale(1)';
          });
        }
      }
    };

    const regionElements = regions.reduce((acc, region) => {
      acc[region] = Array.from(document.querySelectorAll(`[id="${region}"]`));
      return acc;
    }, {});

    regionElementsRef.current = regionElements;

    Array.from(document.querySelectorAll('[id]')).forEach((el) => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    document.addEventListener('click', (e) => {
      const id = e.target.id;
      if (regions.includes(id)) {
        setActiveRegion(true);
        setIdOfRegion(id);
        setTitle(`Выбранный регион: ${ruRegions[id]}`);

        regionElementsRef.current[id].forEach((el) => {
          el.style.fill = '#2859FF';
          el.style.filter = 'grayscale(0)';
        });

        if (activeRegion) {
          if (idOfRegion !== id) {
            regionElementsRef.current[idOfRegion].forEach((el) => {
              el.style.fill = '#fff';
              el.style.filter = 'grayscale(1)';
            });
          }
        }
      } else {
        setActiveRegion(false);
      }
    });

    return () => {
      Array.from(document.querySelectorAll('[id]')).forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [regions, activeRegion, idOfRegion]);

  const handleMouseMove = (event) => {
    const { id } = event.target;
    const x = event.clientX;
    const y = event.clientY;
    const tooltip = document.querySelector(`.${styles.info}`);

    if (tooltip && regions.includes(id)) {
      tooltip.style.display = 'block';
      tooltip.style.top = `${y - 50}px`;
      tooltip.style.left = `${x + 20}px`;
    } else {
      tooltip.style.display = 'none';
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [regions]);

  return (
    <div>
      <div />
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>{currentRegion}</div>
      <MapImage regions={regions} />
    </div>
  );
};
