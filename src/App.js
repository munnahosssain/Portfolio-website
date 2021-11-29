import './App.css';
import NavBar from './component/NavBar/NavBar';
import About from './component/About/About';
import Services from './component/Services/Services';
import Home from './component/Home/Home';
import Experience from './component/Experience/Experience';
import Contacts from './component/Contacts/Contacts';
import PageNotFound from './component/PageNotFound/PageNotFound';
import ClientReview from './component/ClientReview/ClientReview';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                    <Route path="/experience">
                        <Experience />
                    </Route>
                    <Route path="/review">
                        <ClientReview />
                    </Route>
                    <Route path="/contacts">
                        <Contacts />
                    </Route>
                    <Route component={PageNotFound}>
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
