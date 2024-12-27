import Container from 'react-bootstrap/Container';
import FormInput from '../FormInput/FormInput';

import styles from "./App.module.css";

const App = () => {
  return (
    <Container fluid="md">
      <div className={styles.headerWrapper}>
        <h1>OptimaSQL</h1>
        <p className="lead">Inputs a SQL query to compare various query execution plans, cost diagrams and cardinality diagrams</p>
        <h4 style = {{textAlign: "left"}}>Instructions :</h4>
        <p className={styles.headerText}>1) Enter a properly formatted SQL query on the right input space. The query must be based on the <a href="https://github.com/daedalus15/OptimaSQL/tree/main/database" target="_blank" rel="noopener noreferrer">these</a> instructions. 
        <br/> 2) You can also select predicates to vary on the left, which will allow the PostgreSQL DBMS to vary the selectivity of those predicates to find alternate plans for comparison.
        <br/> 3) Only those predicates which include numeric and data attributes and have histograms available in the database have been added to the list of selectable predicates.
        </p>
      </div>
      <hr/>
      <FormInput/>
    </Container>
  );
}

export default App;
