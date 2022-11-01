import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import { HashRouter as Router, Routes } from 'react-router-dom'
import HomesScreen from './components/HomesScreen';
import FilesScreen from './components/FilesScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='my-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomesScreen />} />
            <Route path='/files' element={<FilesScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
