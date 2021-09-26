import styles from './app.module.css';
import { ReactComponent as Logo } from './logo.svg';
import { Drugstore, useGetDrugstores } from '@farmapp2/core';
import { useEffect } from 'react';

export function App() {

  const {drugstores, getDrugstores} = useGetDrugstores();

  useEffect(()=>{
    async function getDrugstoresCall() {
      await getDrugstores();
    }
    getDrugstoresCall();
  }, [])

  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to farmapp-web!</h1>
      </header>
      <main>
        {drugstores && drugstores.map((drugstore: Drugstore, index: number) => (
            <p key={index}>{drugstore.premisesName}</p>
          ))}
      </main>
    </div>
  );
}


export default App;
