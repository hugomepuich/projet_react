import './MainView.css'
import asile from './assets/asile.avif'
import foret from './assets/foret.jpg'
import manoir from './assets/manoir.webp'

/*

●	(4 points) Présentation rapide des sessions d’escape game
●	(1 point) Présentation rapide de l’entreprise 
●	(1 point) Les informations de contact de l’entreprise 

*/

const sessions = {
    "Le Manoir Maudit": "Explorez un vieux manoir hanté où des secrets sombres et des esprits tourmentés vous attendent.",
    "La Forêt des Damnés": "Perdez-vous dans une forêt sinistre où des créatures cauchemardesques rôdent dans l'ombre.",
    "L'Asile Abandonné": "Tentez d'échapper à un asile oublié où les anciens patients reviennent à la vie."
  };

const imgs = {
    "Le Manoir Maudit": manoir,
    "La Forêt des Damnés": foret,
    "L'Asile Abandonné": asile
}

function SessionCard(props) {
    return (
        <div className='session-card'>
            <h4>{props.title}</h4>
            <img src={imgs[props.title]} alt={props.title} className="card-img"></img>
            <p>{props.description}</p>
        </div>
    )
}

function SessionPresentation() {
    return (
        <div id='session-presentation'>
            <div id='session-cards'>
                {Object.keys(sessions).map((key) => {
                    return <SessionCard title={key} description={sessions[key]} />
                })}
            </div>
        </div>
    )
}



function CompanyPresentation() {
    return (
        <div id='company-presentation' className='card'>
            <h3>Qui sommes nous ?</h3>
            <p>La Maison Horrifique est une société spécialisée dans les sessions d'escape game immersives sur le thème de l'horreur. Plongez dans un univers terrifiant où chaque minute compte, et faites face à vos peurs dans des scénarios conçus pour vous faire frissonner.</p>
        </div>
    )
}

function ContactInformation() {
    return (
        <div id='contact-information' className='card'>
            <h3>Contactez nous</h3>
            <ul>
                <li>Adresse : 123 rue des Horreurs</li>
                <li>Numéro de téléphone : 01 23 45 67 89</li>
                <li>Mail : maison.pasbelle@horrifique.moche</li>
            </ul>
        </div>
    )
}

function MainView() {
    return (
        <main id="main-view">
            <SessionPresentation />
            <div id='about'>
                <CompanyPresentation />
                <ContactInformation />
            </div>
        </main>
    )
}

export default MainView;