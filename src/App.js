import './App.css';
import NavBar from './component/NavBar/NavBar';
import Particles from 'react-particles-js';
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
            <Particles
                className="particles-js"
                params={{
                    Particles: {
                        Number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 6,
                                color: '#f9ab00'
                            }
                        }
                    }
                }}
            />
            <NavBar />
            <Header />
            <About />
            <Services />
            <Experience />
            {/* <ClientReview /> */}
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
