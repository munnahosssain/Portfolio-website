import './App.css';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Particles from 'react-particles-js';

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
        </div>
    );
}

export default App;
