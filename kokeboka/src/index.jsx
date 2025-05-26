import './App.css'
import matbilde from './assets/Ekstremt-god-kokebokv2.jpg'
import Header from './header.jsx'
import Nav from './nav.jsx'
import './Card.css'

function Index(){
    return (
       <>
        <Header />
        <Nav />
        <div className="forside-flex">
            <img
                src={matbilde}
                alt="Bilde av middag"
                className="forside-bilde"
            />
            <div className="card" style={{ maxWidth: 500, minWidth: 220 }}>
                <h2>Velkommen til Kokeboka!</h2>
                <p>Her finner du deilige oppskrifter for enhver anledning. Utforsk, bli inspirert og lag noe godt!</p>
            </div>
        </div>
       </>
    );
}

export default Index