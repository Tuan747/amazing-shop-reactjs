import Header from './layout/PageLayout/screen'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Products from './pages/products/screen';
import Loading from './components/Loading/screen';

function App() {
  return (
    <Container fluid className="App">
      <Loading />
      <Header />
      <Products />
    </Container>
  );
}

export default App;
