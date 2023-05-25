import styles from './costsMenu.module.css';
import Image from 'next/image';

const logo = '/menu/menuLogo.svg';
const user = '/menu/user.svg';
const costs = '/menu/costs.svg';
const document = '/menu/document.svg';

export const CostsMenu = () => {
  return (
    <div className={styles.menu}>
      <button type="button">
        <Image className={styles.logo} width={30} height={28} src={logo} />
      </button>
      <div className={styles.container}>
        <button type="button">
          <Image width={19} height={21} src={user} />
        </button>
        <button type="button">
          <Image width={12} height={16} src={costs} />
        </button>
        <button type="button">
          <Image width={16} height={20} src={document} />
        </button>
      </div>
    </div>
  );
};
