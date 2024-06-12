import './Footer.css'
import React from 'react'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'
import instagram from './assets/instagram.png'


const socials = {
    facebook: facebook,
    twitter: twitter,
    instagram: instagram
}

function SocialDivs () {

    let divs = [];
    for (let key in socials) {
        divs.push(
            <div className='footer-social-icon'>
                <img className='footer-social-img' src={socials[key]} alt={key}></img>
            </div>
        )
    }
    
    return divs;

}
    
/*

●	(2 points) Un footer pour accéder aux : 
    ○	Réseaux sociaux de l’entreprise. 
    ○	Détail de chaque session
    ○	Mentions légales
    ○	Formulaire de contact

*/

function Footer() {
    return (
        <footer id="main-footer">
            <div id='footer-links'>
                <p>Détail des sessions</p>
                <p>Mentions légales</p>
                <p>Formulaire de contact</p>
                <p>© 2021 Maison Horrifique</p>
            </div>
            <div id='footer-socials'>
                <SocialDivs />
            </div>
        </footer>
    )
}


export default Footer;