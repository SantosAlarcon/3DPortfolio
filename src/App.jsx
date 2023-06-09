import { BrowserRouter } from "react-router-dom";
import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
    Footer,
} from "./components";

function App() {
    return (
        <BrowserRouter>
            <div className="relative bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                {/*<Experience />*/}
                <Tech />
                <Works />
                {/*<Feedbacks />*/}
                <Contact />
                <StarsCanvas />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
