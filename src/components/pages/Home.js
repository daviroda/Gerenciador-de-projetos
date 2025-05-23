import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <h2>Comece a gerenciar os seus projetos agora mesmo!</h2>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={savings} alt="Costs" />
        </section>
    )
};

export default Home;