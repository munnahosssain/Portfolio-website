import './App.css';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Particles from 'react-particles-js';
import About from './component/About/About';

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
            <About/>
        </div>
    );
}

export default App;
