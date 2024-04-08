import React from 'react';
import styles from './Home.module.css';
import Form from '../components/Form';
import ProductsList from '../components/ProductsList';

const Home = () => {
  const [isAnimationVisible, setAnimationVisible] = React.useState(false);

  React.useEffect(() => {
    // Coloque a classe 'showAnimation' após um pequeno atraso (opcional)
    const timeoutId = setTimeout(() => {
      setAnimationVisible(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []); // O array vazio [] garante que este efeito só é executado uma vez, equivalente a componentDidMount

  return (
    <main className="container">
      <div className={styles.content}>
        <div
          className={`${styles.leftContent} animateLeft ${
            isAnimationVisible ? ' showAnimation' : ''
          }`}
        >
          <h1>Title here</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            expedita id numquam animi eum nostrum deserunt.
          </p>
          <div>
            <button className="button primary">Primary</button>
            <button className="button secondary">Secondary</button>
          </div>
        </div>

        <div
          className={`animateRight ${
            isAnimationVisible ? ' showAnimation' : ''
          }`}
        >
          <Form />
        </div>
      </div>
      <ProductsList />
    </main>
  );
};

export default Home;
