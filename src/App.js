import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Portfolio} from "./portfolio/Portfolio";
import {Contacts} from "./contatcs/Contatcs";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
