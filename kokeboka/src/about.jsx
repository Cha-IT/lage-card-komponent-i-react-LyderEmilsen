import Header from './header.jsx'
import Nav from './nav.jsx'
import './Card.css'

function About(){
    return(
        <>
        <Header />
        <Nav />
        <div className="card oppskrift-detalj" style={{ margin: "2rem auto" }}>
            <h1>Om oss</h1>
            <p>Vi er en gruppe matglade mennesker som ønsker å dele våre oppskrifter med verden.</p>
            <p>Vi tror at matlaging er en kunstform, og vi ønsker å inspirere andre til å lage deilige måltider hjemme.</p>
            <p>Vi håper du finner inspirasjon og glede i våre oppskrifter!</p>
            <p>Kontakt oss gjerne hvis du har spørsmål eller tilbakemeldinger.</p>
        </div>
        </>
    )
}

export default About