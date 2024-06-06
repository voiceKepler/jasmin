import React from "react";
import Button from "../../component/button/Button";
import videoSrc from "../../Assets/hero.mp4";
import "./MainPage.css";
import ServiceCard from "../../component/ServiceCard/ServiceCard";
import AchivementCard from "../../component/card2/AchivementCard";
import Header from "../../component/Header/Hearder";
import WhiteButton from "../../component/button/whiteButton";
import ConfierCard from "../../component/ConfierCard/ConfierCard";
import ComprendraCard from "../../component/ComprendraCard/ComprendraCard";
import RatingCard from "../../component/RatingCard/RatingCard";
import AutoSlider from "../../component/Slider/AutoSlider";
import AccordianFaq from "../../component/Accordian/Accordian";
import image1 from '../../Assets/Grid3.jfif'
import image2 from '../../Assets/Grid4.jfif'
import image3 from '../../Assets/Grid5.jfif'
import image4 from '../../Assets/Grid6.jfif'
import image5 from '../../Assets/Grid7.jfif'
import image6 from '../../Assets/Grid8.jfif'
import image7 from '../../Assets/Grid9.jfif'
import image8 from '../../Assets/Grid10.jfif'
import image9 from '../../Assets/Grid11.jfif'
import image10 from '../../Assets/Grid12.jfif'
import image11 from '../../Assets/Grid13.jfif'
import image12 from '../../Assets/Grid14.jfif'
import image13 from '../../Assets/Grid15.jfif'
import image14 from '../../Assets/Grid16.jfif'
import image15 from '../../Assets/Grid17.jfif'
import image16 from '../../Assets/FAQ1.jfif'
import image17 from '../../Assets/FAQ2.jfif'
import image18 from '../../Assets/FAQ3.jfif'
import image19 from '../../Assets/Grid1.jfif'
import image20 from '../../Assets/Grid3.jfif'
import image21 from '../../Assets/Grid4.jfif'



const MainPage = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-portion">
          <video autoPlay muted loop id="myVideo">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="hero-content-portion p-40">
            <h1>
              <strong>
                Une seule entreprise pour tous vos projets de rénovation
              </strong>
            </h1>
            <p className="mb-50 font-18-res-16 weight-400">
              Votre partenaire de confiance pour toutes vos rénovations
              d’intérieur en Île-de-France et Alsace. Professionnels ou
              particuliers, donnez un coup de neuf à vos espaces dès
              aujourd’hui.
            </p>

            <Button
              name={"Obenir mon devis gratuit"}
              className=" d-flex mt-25 m-auto"
            />
          </div>
        </div>
      </section>
      <section className="content_image_portion pi-200 pt-50 pb-10">
        <div className="d-flex justify-content-between gap-5">
          <div className="content_portion">
            <h5 className="weight-500 font-20-res-10 blue-heading mb-5">
              JASMIN RENOV
            </h5>
            <h1 className="weight-600 font-32-res-22 mb-25">
              Entreprise de rénovation générale en IDF et en Alsace
            </h1>
            <p className="brown_content mb-35">
              Envie d’une{" "}
              <span className="weight-500">
                rénovation sans tracas et au budget maîtrisé
              </span>{" "}
              ? Chez notre entreprise générale de bâtiment à taille humaine,
              fort de nos 20 ans d’expérience, nous simplifions votre projet de
              rénovation d’intérieur.
            </p>

            <p className="brown_content mb-35">
              Grâce à notre maîtrise de tous les corps d’état, vous disposez d’
              <span className="weight-500">
                un seul interlocuteur pour une réalisation rapide et fluide
              </span>{" "}
              de vos projets travaux. Optez pour une rénovation sereine,{" "}
              <span className="weight-500">
                au meilleur rapport qualité/prix.
              </span>
            </p>
            <Button name={"Contactez-nous"} />
          </div>
          <div className="image_portion">
            <img
              src={image1}
              alt="image"
              className="image"
            />
          </div>
        </div>
      </section>

      <section className="pi-200 pt-50 pb-10 mt-10">
        <h1 className="font-40-res-32 weight-700 text-center mb-10">
          Nos services de rénovation
        </h1>
        <div className="d-flex mt-60 justify-content-between align-items-center gap-5">
          <div className="content_portion">
            <h2 className="font-32-res-24">
              Rénovation de maisons et immeubles
            </h2>
            <p className="brown_content mb-35">
              Vous voulez{" "}
              <span className="weight-500">
                rénover votre maison du sol au plafond
              </span>
              , l’agrandir en y ajoutant une chambre supplémentaire, redonner
              vie à vos combles ou optimiser votre isolation ?
            </p>
            <p className="brown_content mb-35">
              Pour une{" "}
              <span className="weight-500">
                rénovation partielle ou complète{" "}
              </span>
              de votre maison ou immeuble collectif, il est essentiel de confier
              vos travaux à une société de rénovation qui met du cœur, de
              l’expérience et de la volonté jusque dans les moindres détails.
            </p>
            <p className="brown_content mb-35">
              Jasmin Rénov,{" "}
              <span className="weight-500">
                entreprise de rénovation maison
              </span>
              , gère votre projet de A-Z, grâce à une maîtrise d’œuvre efficace
              et l’intervention d’artisans fiables et respectueux de l’esprit de
              votre projet.
            </p>
          </div>
          <div className="image_portion2">
            <img
              src={image2}
              className="image"
            />
          </div>
        </div>
        <div className="d-flex mt-60 justify-content-between align-items-center gap-5">
          <div className="image_portion2">
            <img
              src={image3}
              alt="image"
              className="image"
            />
          </div>
          <div className="content_portion">
            {/* <h2 className="font-32-res-24">Rénovation de maisons et immeubles</h2> */}
            <p className="brown_content mb-35">
              Vous souhaitez
              <span className="weight-500">rénover votre appartement</span>,ou
              votre studio pour en optimiser l'espace et/ou le remettre au goût
              du jour ?
            </p>
            <p className="brown_content mb-35">
              Jasmin Rénov
              <span className="weight-500">
                ,entreprise générale de bâtiment{" "}
              </span>
              vous accompagne dans la ,
              <span className="weight-500">
                rénovation d'appartement ou studio de A à Z.
              </span>
            </p>
            <p className="brown_content mb-35">
              Nous confier la rénovation de votre appartement, c'est avoir la
              certitude que les travaux se dérouleront sans interruption, grâce
              à nos différents corps de métiers, tout en respectant les règles
              de l'art.
            </p>
            <p className="brown_content mb-35">
              Au-delà de nos qualifications, nos artisans rénovation ont
              l'habitude de rénover des appartements et des studios dans le
              respect du règlement de copropriété et des exigences à prendre.
            </p>
          </div>
        </div>
        <div className="d-flex mt-60 justify-content-between align-items-center gap-5">
          <div className="content_portion">
            {/* <h2 className="font-32-res-24">Rénovation de maisons et immeubles</h2> */}
            <p className="brown_content mb-35">
              Vous souhaitez donner un coup de neuf à une partie spécifique de
              votre intérieur ? Que ce soit pour
              <span className="weight-500">rénover une salle de bains,</span>
              refaire une <span className="weight-500">cuisine</span>, un{" "}
              <span className="weight-500">
                salon , transformer un garage en
              </span>
              habitation, ou même{" "}
              <span className="weight-500">aménager vos combles,</span> nous
              vous offrons des solutions personnalisées qui répondent à vos
              besoins et à votre budget.
            </p>
            <p className="brown_content mb-35">
              Par ailleurs, si vous avez besoin d'
              <span className="weight-500">
                optimiser l'utilisation de l'espace dans une pièce existante
              </span>
              , d'aménager des bureaux ou des espaces commerciaux, ou de{" "}
              <span className="weight-500">
                rendre votre logement accessible aux personnes à mobilité
                réduite (PMR)
              </span>
              , notre entreprise de rénovation propose des solutions sur mesure
              qui allient fonctionnalité et esthétisme.{" "}
            </p>
          </div>
          <div className="image_portion2">
            <img
              src={image4}
              alt="image"
              className="image"
            />
          </div>
        </div>
        <div className="d-flex mt-60 justify-content-between align-items-center gap-5">
          <div className="image_portion2">
            <img
              src={image5}
              alt="image"
              className="image"
            />
          </div>
          <div className="content_portion">
            {/* <h2 className="font-32-res-24">Rénovation de maisons et immeubles</h2> */}
            <p className="brown_content mb-35">
              Vous souhaitez aménager de nouveaux bureaux pour vos
              collaborateurs ou attirer les clients ? Pour{" "}
              <span className="weight-500">rénover un local commercial</span> ou
              des espaces de travail, pensez à faire appel à une{" "}
              <span className="weight-500">
                entreprise de rénovation de bâtiment
              </span>{" "}
              fiable et compétitive!
            </p>
            <p className="brown_content mb-35">
              Les artisans de <span className="weight-500">Jasmin Rénov</span>{" "}
              répondent à vos besoins de A à Z et s'engagent à dynamiser l'image
              de votre entreprise. Vous gagnerez du temps car vous n'aurez qu'
              <span className="weight-500">un seul interlocuteur</span>
              pour l'ensemble de vos travaux, dans le respect des règles de
              l'art.
            </p>
          </div>
        </div>
      </section>
      <section className="service_portion">
        <div className="service-portion container">
          <ServiceCard
            imgUrl={image6}
            title="Electricité générale"
          />
          <ServiceCard
            imgUrl={image7}
            title="Peinture"
          />
          <ServiceCard
            imgUrl={image8}
            title="Plomberie – Sanitaire"
          />
          <ServiceCard
            imgUrl={image9}
            title="Plâtrerie – Isolation"
          />
          <ServiceCard
            imgUrl={image10}
            title="Chauffage – VMC"
          />
          <ServiceCard
            imgUrl={image11}
            title="Porte – Fenêtre – Volet"
          />
          <ServiceCard
            imgUrl={image12}
            title="Revêtements de sols"
          />
          <ServiceCard
            imgUrl={image13}
            title="Revêtements de murs"
          />
        </div>
      </section>
      <section>
        <div
          style={{
            background: "#1e293b",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            padding: "2rem 0",
          }}
        >
          <svg
            xmlns="https://www.w3.org/2000/svg"
            height="38"
            width="38"
            fill="#e81a4b"
            viewBox="0 0 448 512"
          >
            <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM351.6 321.5l-11.62 50.39c-1.633 7.125-7.9 12.11-15.24 12.11c-126.1 0-228.7-102.6-228.7-228.8c0-7.328 4.984-13.59 12.11-15.22l50.38-11.63c7.344-1.703 14.88 2.109 17.93 9.062l23.27 54.28c2.719 6.391 .8828 13.83-4.492 18.22L168.3 232c16.99 34.61 45.14 62.75 79.77 79.75l22.02-26.91c4.344-5.391 11.85-7.25 18.24-4.484l54.24 23.25C349.5 306.6 353.3 314.2 351.6 321.5z"></path>
          </svg>
          <h3 className="font-38">Devis gratuit : 06 05 62 50 19</h3>
        </div>
      </section>
      <section className="text-center p-65">
        <h1 className="weight-500 font-20-res-10  mb-10 mt-25">
          Voir l'ensemble de nos services
        </h1>
        <p className="brown_content mb-25">
          Nous réalisons des projets de rénovation de toutes tailles, pour les
          particuliers et les professionnels.{" "}
        </p>
        <div className="d-flex justify-content-center gap-10">
          <div>
            <Button name={"Particuliers"} className=" d-flex mt-25 m-auto" />
          </div>
          <div>
            <WhiteButton
              name={"Professionnels"}
              className=" d-flex mt-25 m-auto"
            />
          </div>
        </div>
      </section>
      <section className="confier_portion p-50">
        <h1 className="text-center weight-500 font-20-res-10 w-35 m-auto">
          Confier vos travaux de rénovation à Jasmin Rénov, c'est...
        </h1>
        <div className="confier_grid mt-40">
          <ConfierCard
            title="Plus de simplicité et expertise variée"
            paragraph={
              "Forts de 20 ans d'expérience, nos artisansqualifiés réalisent tous vos projets de rénovation."
            }
          />
          <ConfierCard
            title="Budget et délais maîtrisés"
            paragraph="Nous respectons les délais et le budget convenus,assurant une gestion efficace de votre projet."
          />
          <ConfierCard
            title="Qualité et garantie décennale"
            paragraph="Matériaux de haute qualité et travail soigné pour un résultat final exceptionnel."
          />
        </div>
        <section className="Comprendra_portion p-50">
          <Header heading="Comprendre notre process travaux" />
          <div className="Comprendra_grid mt-40">
            <ComprendraCard
              count={"01."}
              title="Première prise decontact"
              paragraph="Appelez-nous directement au 06 05 62 50 19, Nous nous déplaçons gratuitement chez ou remplissez notre formulaire en ligne en 2 vous ou dans vos locaux pour évaluer votre minutes."
            />
            <ComprendraCard
              count={"02."}
              title="Visite gratuite de votre chantier"
              paragraph="Nous nous deplacons gratuitement chez vous ou dans vos locaus pour evaluer votre projet"
            />

            <ComprendraCard 
              count={"03."}
              title="Envoi du devis gratuit"
              paragraph="Vous recevrez rapidement votre devis détaillé et transparent, poste par poste."
            />
            <ComprendraCard
              count={"04."}
              title="Début de vos travaux"
              paragraph="Encore un peu de patience et vous aurez un tout nouveau chez vous, ou des locaux métamorphosés !"
            />
          </div>
        </section>
      </section>
      <section>
        <div className="rating_portion p-50">
        <Header heading="(Avis Google, Houzz, PagesJaunes,...)" />
        <div className="confier_grid mt-40 gap-10">
          <RatingCard clientName={"Kévin C."} paragraph={"C'est le meilleur artisan avec lequel j'ai travaillé. Les délais sont respectés, les coûts sont maitrisés il n'y a pas de mauvaise surprise. Le Nettoyage quotidien du chantier est un gros plus. Je recommande vivement."}/>
          <RatingCard clientName={"Jamila M."} paragraph={"Rénovation studio (SdB, Cuisine, Entrée – Séjour): Suite à de grosses dégradations par le précédent habitant, il y avait beaucoup à faire. L'entreprise a pris en main le projet avec sérieux, professionnalisme et qualité. Le devis a été parfaitement délivré en fonction de nos besoins. Début et fin des travaux dans les délais. Saim et son équipe ont été attentifs et flexibles, toujours prêts à trouver des solutions à nos problèmes. Je ferai surement de nouveau appel à Jasmin Renov et recommande l'entreprise."}/>
          <RatingCard clientName={"Philippe S."} paragraph={"Excellent relationnel, la disponibilité de Mr Yousaf et ses conseils visant à rationaliser les dépenses, ainsi que l'honnêteté, discrétion et convivialité dans le respect de trois jeunes ouvriers passionnés et ayant à cœur de répondre à mes attentes. C'est spontanément et avec plaisir que je recommande JASMIN RENOV. Je compte poursuivre avec cette entreprise et c'est dans l'optimisme et la confiance que je la consulte pour d'autres projets."}/>

        </div>

        </div>
      </section>

      <section>
        <div className="achievement-portion">
          <Header heading="Nos réalisations en images" />
          <div className="achievement-img container mb-10">
            <AchivementCard imgUrl={image14} />
            <AchivementCard imgUrl={image15} />
            <AchivementCard imgUrl={image16} />
            <AchivementCard imgUrl={image17} />
            <AchivementCard imgUrl={image18} />
            <AchivementCard imgUrl={image19} />
            <AchivementCard imgUrl={image20} />
            <AchivementCard imgUrl={image21} />
          </div>
          <Button hyperlink="#" name="Voir plus" className="d-flex m-auto " />
        </div>
      </section>
      <section className="noz_portion p-50">
        <div className="grey_box p-50">
          <h1 className="weight-700 font-40-res-32">Nos zones d'intervention</h1>
          <h2 className="font-36-res-28 weight-500 head_grey mt-40">Ile-de-France</h2>
          <div className="d-flex">
            <p className="mt-20">► Voir les départements desservis</p>
          </div>
          <h2 className="font-36-res-28 weight-500 head_grey mt-40">Alsace</h2>
          <div className="d-flex">
            <p className="mt-20">► Voir les départements desservis</p>
          </div>
          <Button name={"Contactez-nous"}  className={"d-flex m-auto"}/>


        </div>

      </section>
      <section className="slider_portion p-50">
      <Header heading="Nos derniers articles" />
      <AutoSlider/>

      </section>
      <section className="p-50">
      <Header heading="Foire aux questions" />
      <div className="">
        <div className="acc_portion">
          <AccordianFaq  heading={"Comment puis-je demander un devis gratuit pour un projet de rénovation d'intérieur ?"} paragraph={"Pour demander votre devis de rénovation gratuit, vous pouvez nous contacter par téléphone au 06 05 62 50 19, ou par e-mail sur contact@jasmin-eurl.com, ou utiliser le formulaire dédié sur notre page de contact. Nous organiserons une visite sur place afin d'évaluer vos besoins et de discuter de votre projet"}/>
          <AccordianFaq  heading={"Quels sont les avantages de faire appel à une entreprise de rénovation d'intérieur professionnelle plutôt que de faire les travaux soi-même ?"} paragraph={""}/>
          <AccordianFaq  heading={"Quel est le prix au m2 d'une rénovation?"} paragraph={""}/>
          <AccordianFaq  heading={"Est-ce que votre entreprise dispose d'une assurance responsabilité civile ?"} paragraph={""}/>
          <AccordianFaq  heading={"Etes-vous ouverts à des collaborations en tant que sous-traitant?"} paragraph={""}/>
        </div>
      </div>


      </section>
      <section>
        <div className="interiorRenovation-img">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-fotoaibe-1571460.jpg&fm=jpg"
            alt="background images"
          />
          <div className="interiorRenovation-content">
            <p>
              Votre rénovation d’intérieur sur mesure commence ici. <br />
              Demandez votre devis gratuit dès maintenant et parlons de votre
              projet.
            </p>
            <Button
              hyperlink="#"
              name="Devis gratuit"
              className="d-flex m-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
