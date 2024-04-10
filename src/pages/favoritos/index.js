import Rodape from 'components/Rodape';
import styles from './favoritos.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import { useFavoritoContext } from 'contextox/Favoritos';


function Favoritos() {
    const { favorito } = useFavoritoContext();
    return(
        <>
            <Banner imagem="favoritos"/>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos