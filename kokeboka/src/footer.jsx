import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div>
                <span>Kokeboka &copy; {new Date().getFullYear()}</span>
                <span style={{ marginLeft: "1em" }}>
                    Laget av Lyder Nordahl Emilsen, IT VG2
                </span>
            </div>
        </footer>
    )
}

export default Footer