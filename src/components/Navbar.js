function Navbar(props) {
    return (
        <div className="sidenav" style={{width: props.width}}>
            <a href="section">About</a>
            <a href="#section">Projects</a>
            <a href="#section">Contact</a>
            <button onClick={props.handleNavClose}>X</button>
        </div>
    )
}

export default Navbar