import { AiFillHome } from 'react-icons/ai';
import { MdOutlineExplore, MdOutlineVideoLibrary } from 'react-icons/md';
import { GiFilmStrip } from 'react-icons/gi';
import { HiDownload } from 'react-icons/hi';
import { RiVideoLine } from 'react-icons/ri';
import { SiYoutubegaming, SiYoutubemusic } from 'react-icons/si';
import { VscHistory } from 'react-icons/vsc';
import { WiTime4 } from 'react-icons/wi';
import { BsCollectionPlay, BsPlayBtn, BsChevronDown } from 'react-icons/bs';

import Options from '../Options';
import Canais from '../Canais';

import styles from './styles.module.scss';

const Sidebar: React.FC = () => {
    const imageDefault = 'https://i.pinimg.com/originals/60/99/f3/6099f305983371dadaceae99f5c905bf.png';
    return (
        <div className={styles.container}>
            <section>
                <Options title="Inicio">
                    <AiFillHome />
                </Options>
                <Options title="Explorar">
                    <MdOutlineExplore />
                </Options>
                <Options title="Shorts">
                    <SiYoutubegaming />
                </Options>
                <Options title="Incrições">
                    <BsCollectionPlay />
                </Options>
                <Options title="Originals">
                    <BsPlayBtn />
                </Options>
                <Options title="Music">
                    <SiYoutubemusic />
                </Options>
            </section>
            <section className={styles.section}>
                <Options title="Biblioteca">
                    <MdOutlineVideoLibrary />
                </Options>
                <Options title="Histórico">
                    <VscHistory />
                </Options>
                <Options title="Seus vídeos">
                    <RiVideoLine />
                </Options>
                <Options title="Seus filmes">
                    <GiFilmStrip />
                </Options>
                <Options title="Assistir mais tarde">
                    <WiTime4 />
                </Options>
                <Options title="Download">
                    <HiDownload />
                </Options>
                <Options title="Mostrar mais">
                    <BsChevronDown />
                </Options>
            </section>
            <section className={styles.section}>

                <p className={styles.title}>inscrições</p>
                <Canais url={imageDefault} name="Padrão" />
                <Canais url={imageDefault} name="Padrão" />
                <Canais url={imageDefault} name="Padrão" />
                <Canais url={imageDefault} name="Padrão" />
                <Canais url={imageDefault} name="Padrão" />
                <Options title="Mostrar mais">
                    <BsChevronDown />
                </Options>

            </section>
        </div>
    );
}

export default Sidebar;