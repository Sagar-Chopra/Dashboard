import './App.css';
import Body from './components/Body';
import Container from './components/Container';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Dashboard>
      <Sidebar></Sidebar>
      <Container>
        <Header></Header>
        <Body></Body>
      </Container>
    </Dashboard>
  );
}

export default App
