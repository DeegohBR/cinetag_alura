import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import Videos from "json/db.json";
import styles from "./Inicio.module.css";

function Inicio() {
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus videos e filmes</h1>
      </Titulo>
      <section className={styles.container}>
        {Videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
