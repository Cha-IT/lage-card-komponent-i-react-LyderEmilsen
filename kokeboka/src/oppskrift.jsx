import { useParams } from "react-router-dom";
import Header from "./header";
import Nav from "./nav";
import oppskrifter from './assets/oppskrifter.json';
import './Card.css';

function Oppskrift() {
    const { id } = useParams();
    const oppskrift = oppskrifter.find(oppskrift => oppskrift.id === parseInt(id));

    if (!oppskrift) {
        return (
            <>
                <Header />
                <Nav />
                <div className="card">
                    <h2>Oppskriften ble ikke funnet</h2>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <Nav />
            <div className="card oppskrift-detalj" style={{ margin: "2rem auto" }}>
                <h2>{oppskrift.navn}</h2>
                <p>{oppskrift.beskrivelse}</p>
                <h3>Ingredienser</h3>
                <ul style={{ marginBottom: "1.5rem" }}>
                    {oppskrift.ingredienser.map((ingrediens, index) => (
                        <li key={index}>{ingrediens}</li>
                    ))}
                </ul>
                <h3>Fremgangsmåte</h3>
                <ol>
                    {oppskrift.fremgangsmåte.map((trinn, index) => (
                        <li key={index}>{trinn}</li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default Oppskrift;