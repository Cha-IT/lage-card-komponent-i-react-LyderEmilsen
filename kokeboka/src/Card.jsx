import './Card.css'
import { Link } from 'react-router-dom'

function Card({ oppskrift }) {
    return (
        <div className="card">
            <h2>{oppskrift.navn}</h2>
            <p>{oppskrift.beskrivelse}</p>
            <Link to={`/oppskrift/${oppskrift.id}`} className="card-link">Se oppskrift</Link>
        </div>
    )
}

export default Card