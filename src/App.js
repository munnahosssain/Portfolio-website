import './App.css';
import NavBar from './component/NavBar/NavBar';
import Particle from './component/Particle/Particle';
import About from './component/About/About';
import Services from './component/Services/Services';
import Header from './component/Header/Header';
import Experience from './component/Experience/Experience';
import ClientReview from './component/ClientReview/ClientReview';
import Contacts from './component/Contacts/Contacts';
import Footer from './component/Footer/Footer';

function App() {
    return (
        <div>
            <Particle />
            <NavBar />
            <Header />
            <About />
            <Services />
            <Experience />
            <ClientReview />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
