import './App.css';
import { Topbar } from './components/Topbar/topbar';
import { Content } from './components/Content/content';
import { Footer } from './components/Footer/footer';

function App() {
    return (
        <>
            <Topbar />
            <Content />
            <Footer />
        </>
    );
}

export default App;