
import { AiOutlineMenu, AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { BsKeyboard, BsGrid3X3Gap, BsBell } from 'react-icons/bs';
import { GrSearch } from 'react-icons/gr';
import { BiMicrophone } from 'react-icons/bi';
import styles from './styles.module.scss';
import Profile from '../Profile';

export default function Navbar() {

  const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1280px-YouTube_Premium_logo.svg.png';
  const imageProfile = "https://yt3.ggpht.com/yti/APfAmoGULixJLq8OzigZm4Y5Y98u2vYu0h2eiF4QlC8ghOs=s108-c-k-c0x00ffffff-no-rj";
  return (
    <div className={styles.container}>

      <div className={styles.start}>
        <div className={styles.menu}>
          <AiOutlineMenu />
        </div>
        <div className={styles.icon}>
          <img
            src={url}
            alt="Youtube Premium" />
          <span>BR</span>
        </div>
      </div>

      <div className={styles.center}>

        <div className={styles.input}>
          <input type="text" placeholder="Pesquisar" />
          <BsKeyboard />
        </div>
        <a>
          <GrSearch />
        </a>

        <div className={styles.voice}>
          <BiMicrophone />
        </div>
      </div>

      <div className={styles.end}>
        <div className={styles.camera}>
          <a >
            <AiOutlineVideoCameraAdd />
          </a>
        </div>

        <div className={styles.grid}>
          <a>
            <BsGrid3X3Gap />
          </a>
        </div>

        <div className={styles.bell}>
          <a>
            <BsBell />
          </a>
        </div>

        <div className={styles.profile}>
          <Profile
            width='32px'
            height='32px'
            url={imageProfile}
          />
        </div>
      </div>

    </div>
  )
}
