import { Link } from 'react-router-dom';
import oppskrifter from './assets/oppskrifter.json'
import Header from './header.jsx'
import Nav from './nav.jsx'
import Card from './Card.jsx'
import './App.css'


function Oppskrifter() {
    return (
        <>
            <Header />
            <Nav />
            <h1>Oppskrifter</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1.5rem"
            }}>
                {oppskrifter.map((oppskrift) => (
                    <Card key={oppskrift.id} oppskrift={oppskrift} />
                ))}
            </div>
        </>
    )
}

export default Oppskrifter