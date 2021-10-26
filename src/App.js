import Header from './layout/PageLayout/screen'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Products from './pages/products/screen';

function App() {
  return (
    <Container fluid className="App">
      <Header />
      <Products />
    </Container>
  );
}

export default App;
