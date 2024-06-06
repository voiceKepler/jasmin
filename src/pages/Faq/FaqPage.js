import React from 'react'
import './FaqPage.css'
import video from '../../Assets/video2.mp4'
import Faq from '../../component/FaqComponent/Faq'
import Renovation from '../../component/Renovation/Renovation'
import Faq1 from '../../Assets/FAQ1.jfif'
import Faq2 from '../../Assets/FAQ2.jfif'
import Faq3 from '../../Assets/FAQ3.jfif'


const FaqPage = () => {
  return (
    <div>
      <div className='hero-portion'>
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className='hero-content-portion'>
          <h1><strong>FAQ</strong></h1>
          <p>Découvrez les réponses aux questions fréquemment posées sur nos services de rénovation d'intérieur en Ile-de-France et en Alsace.</p>
        </div>
      </div>
      <div className='faq-parent container'>
        <div className='faq-group'>
          <div className='faq-img'>
            <img src={Faq1} alt="FAQ Image" />
          </div>
          <h2>Expertise & Services</h2>
        </div>
        <div className='faq-group'>
          <div className='faq-img'>
            <img src={Faq2} alt="FAQ Image" />
          </div>
          <h2>Clients</h2>
        </div>
        <div className='faq-group'>
          <div className='faq-img'>
            <img src={Faq3} alt="FAQ Image" />
          </div>
          <h2>Project & Gestion</h2>
        </div>
      </div>
      <div className="Faq container">
        <h1 className='Faq-head'>Expertise & Services</h1>
        <div className="faq-list">
          <Faq question="Quels services votre entreprise de rénovation d'intérieur propose-t-elle ?" answer="Notre entreprise propose une large gamme de services de rénovation d’intérieur, notamment la rénovation partielle (rénovation de cuisines, salles de bains, chambres, salons, bureaux…) et la rénovation complète de maisons, appartements, studios, immeubles et bureaux à Paris, en Ile-de-France et en Alsace. Nous réalisons des prestations suivantes : la peinture, la pose de revêtements de sol, la pose de revêtements de murs, l’électricité, les cloisons et doublages, la plomberie, la menuiserie, la plâtrerie et l’isolation, et bien plus encore." />
          <Faq question="Est-ce que votre entreprise fournit des services de démolition avant la rénovation d'intérieur?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
          <Faq question="Offrez-vous un service de nettoyage après les travaux de rénovation d'intérieur ?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
          <Faq question="Est-ce que votre entreprise dispose d'une assurance responsabilité civile pour couvrir les éventuels dommages pendant les travaux ?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
          <Faq question="votre entreprise propose des services de rénovation d'intérieur adaptés aux personnes à mobilité réduite (PMR) ?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
        </div>
      </div>
      <div className="Faq container">
        <h1 className='Faq-head'>Clients</h1>
        <div className="faq-list">
          <Faq question="Quelles zones géographiques couvrez-vous?" answer="Notre entreprise propose une large gamme de services de rénovation d’intérieur, notamment la rénovation partielle (rénovation de cuisines, salles de bains, chambres, salons, bureaux…) et la rénovation complète de maisons, appartements, studios, immeubles et bureaux à Paris, en Ile-de-France et en Alsace. Nous réalisons des prestations suivantes : la peinture, la pose de revêtements de sol, la pose de revêtements de murs, l’électricité, les cloisons et doublages, la plomberie, la menuiserie, la plâtrerie et l’isolation, et bien plus encore." />
          <Faq question="Pouvez-vous intervenir dans d'autres régions en dehors de l'Ile-de-France et l'Alsace ?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
          <Faq question="Quels types de clients travaillez-vous habituellement avec votre entreprise de rénovation d'intérieur ?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
          <Faq question="Est-ce que votre entreprise dispose de références ou de témoignages de clients précédents?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
          <Faq question="Etes-vous ouverts à des collaborations en tant que sous-traitant?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
        </div>
      </div>
      <div className="Faq container mb-5">
        <h1 className='Faq-head'>Project & Gestion</h1>
        <div className="faq-list">
          <Faq question="Comment puis-je demander un devis gratuit pour un projet de rénovation d'intérieur ?" answer="Notre entreprise propose une large gamme de services de rénovation d’intérieur, notamment la rénovation partielle (rénovation de cuisines, salles de bains, chambres, salons, bureaux…) et la rénovation complète de maisons, appartements, studios, immeubles et bureaux à Paris, en Ile-de-France et en Alsace. Nous réalisons des prestations suivantes : la peinture, la pose de revêtements de sol, la pose de revêtements de murs, l’électricité, les cloisons et doublages, la plomberie, la menuiserie, la plâtrerie et l’isolation, et bien plus encore." />
          <Faq question="Combien de temps faut-il généralement pour terminer un projet de rénovation d'intérieur?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
          <Faq question="Puis-je acheter mes propres matériaux et les faire installer par votre entreprise?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
          <Faq question="Quels sont les avantages de faire appel à une entreprise de rénovation d'intérieur professionnelle plutôt que de faire les travaux soi-même ?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
          <Faq question="Quel est le prix au m2 d'une rénovation?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
          <Faq question="Comment choisissez-vous les matériaux pour les projets de rénovation d'intérieur?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
          <Faq question="Quelles sont les modalités de paiement acceptées par votre entreprise de rénovation d'intérieur?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut interdum odio. In consectetur non quam a elementum. Sed vitae." />
        </div>
      </div>
      <Renovation title="Votre rénovation d'intérieur sur mesure commence ici." paragraph="Demandez un devis gratuit dès maintenant et parlons de votre projet." />
    </div>
  )
}

export default  FaqPage