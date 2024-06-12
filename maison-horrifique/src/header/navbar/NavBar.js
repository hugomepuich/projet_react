import './NavBar.css'

/*
    ○	Formulaire de réservation 
    ○	Détail de chaque session
    ○	Formulaire de contact
*/

function NavBar() {
    return (
        <nav id="main-nav">
                <h3 className='nav-button'>Accueil</h3>
                <h3 className='nav-button'>Sessions</h3>
                <h3 className='nav-button'>Réservations</h3>
                <h3 className='nav-button'>Contact</h3>
        </nav>
    )
}

export default NavBar;