import './App.css';
import RouterPage from './components/RouterPage';
import any from './images/any.jpg'
import {Container} from 'react-bootstrap'
// 컨테이너 가득 차지않고..(창 줄여도 유지)
function App() {
    return (
        <Container className="App">
            <img src={any} width="100%"/>
            <RouterPage/>
        </Container>
    );
}

export default App;