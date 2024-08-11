import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

const List = styled.ul`
  margin: 10px 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Confidentiality = () => {
  return (
    <Container>
      <Title>Protection des données personnelles</Title>
      <Section>
        <Paragraph>
          Nous utilisons vos données pour fournir et améliorer le service. En utilisant le Service, vous acceptez la collecte et l'utilisation d'informations conformément à cette politique. Sauf indication contraire dans la présente politique de confidentialité, les termes utilisés dans cette politique de confidentialité ont la même signification que dans nos Conditions générales, accessibles à partir de <a href="https://www.afrilangues.fr/com">https://www.afrilangues.fr/com</a>
        </Paragraph>
        <Paragraph>
          Tout est mis en œuvre pour garantir la sécurité de ces données. Pour toute question relative à vos données, de leurs usages et protections, veuillez adresser un courrier électronique à <a href="mailto:privacy@afrilangues.fr">privacy@afrilangues.fr</a>
        </Paragraph>
      </Section>

      <Subtitle>Types de données collectées :</Subtitle>
      <Section>
        <Paragraph>
          Lors de l'utilisation de notre service, nous pouvons vous demander de nous fournir certaines informations personnellement identifiables qui peuvent être utilisées pour vous contacter ou vous identifier ("Données personnelles"). Les informations personnellement identifiables peuvent inclure, sans toutefois s'y limiter:
        </Paragraph>
        <List>
          <ListItem>Nom et prénom</ListItem>
          <ListItem>E-mail</ListItem>
          <ListItem>Adresse</ListItem>
          <ListItem>Téléphone</ListItem>
          <ListItem>Pays</ListItem>
          <ListItem>Nom d’Utilisateur</ListItem>
          <ListItem>Mot de passe</ListItem>
          <ListItem>Langue</ListItem>
          <ListItem>Données d’utilisation</ListItem>
          <ListItem>Autre informations relatives à votre profil</ListItem>
        </List>
        <Paragraph>
          Les Données personnelles peuvent être librement fournies par l’Utilisateur, ou, en cas de Données d’utilisation, collectées automatiquement lorsque vous utilisez <a href="https://www.afrilangues.fr/com">www.afrilangues.fr/com</a>
        </Paragraph>
        <Paragraph>
          Sauf indication contraire, toutes les Données demandées par afrilangues.com sont obligatoires et leur absence peut rendre impossible la fourniture des Services par <a href="https://www.afrilangues.fr/com">www.afrilangues.fr/com</a>. Dans le cas où afrilangues.com précise que certaines Données ne sont pas obligatoires, les Utilisateurs sont libres de ne pas les communiquer sans entraîner de conséquences sur la disponibilité ou le fonctionnement du Service.
        </Paragraph>
        <Paragraph>
          Toute utilisation des Cookies – ou d’autres outils de suivi – par <a href="https://www.afrilangues.fr/com">https://www.afrilangues.fr/com</a> ou par les propriétaires de services tiers utilisés par <a href="https://www.afrilangues.fr/com">https://www.afrilangues.fr/com</a> vise à fournir le Service demandé par l’Utilisateur, outre les autres finalités décrites dans le présent document et dans la Politique relative aux cookies, si elle est disponible.
        </Paragraph>
        <Paragraph>
          Les Utilisateurs sont responsables de toute Donnée personnelle de tiers obtenue, publiée ou communiquée par l’intermédiaire de <a href="https://www.afrilangues.fr/com">https://www.afrilangues.fr/com</a> et confirment qu’ils obtiennent le consentement du tiers pour fournir les Données au Propriétaire.
        </Paragraph>
      </Section>

      <Subtitle>Données d'utilisation</Subtitle>
      <Section>
        <Paragraph>
          Nous pouvons également collecter des informations sur les modalités d'accès et d'utilisation du service ("données d'utilisation"). Ces données d'utilisation peuvent inclure des informations telles que l'adresse de protocole Internet de votre ordinateur (par exemple, l'adresse IP), le type de navigateur, la version du navigateur, les pages de notre service que vous visitez, l'heure et la date de votre visite, le temps passé sur ces pages, identificateurs d'appareil et autres données de diagnostic.
        </Paragraph>
      </Section>

      <Subtitle>Données de suivi et de cookies</Subtitle>
      <Section>
        <Paragraph>
          Nous utilisons des cookies et des technologies de suivi similaires pour suivre l'activité de notre service et conserver certaines informations.
        </Paragraph>
        <Paragraph>
          Les cookies sont des fichiers contenant une petite quantité de données pouvant inclure un identifiant unique et anonyme. Les cookies sont envoyés à votre navigateur à partir d'un site Web et stockés sur votre appareil. Les technologies de suivi également utilisées sont les balises, les balises et les scripts pour collecter et suivre les informations, ainsi que pour améliorer et analyser notre service.
        </Paragraph>
        <Paragraph>
          Vous pouvez demander à votre navigateur de refuser tous les cookies ou d'indiquer quand un cookie est envoyé. Toutefois, si vous n'acceptez pas les cookies, vous ne pourrez peut-être pas utiliser certaines parties de notre service.
        </Paragraph>
        <Paragraph>
          Exemples de cookies que nous utilisons:
        </Paragraph>
        <List>
          <ListItem>Cookies de session. Nous utilisons des cookies de session pour faire fonctionner notre service.</ListItem>
          <ListItem>Cookies de préférence. Nous utilisons des cookies de préférence pour mémoriser vos préférences et vos paramètres.</ListItem>
          <ListItem>Cookies de sécurité. Nous utilisons des cookies de sécurité à des fins de sécurité.</ListItem>
        </List>
      </Section>

      <Subtitle>Utilisation des données</Subtitle>
      <Section>
        <Paragraph>
          Afrilangues utilise les données collectées à diverses fins:
        </Paragraph>
        <List>
          <ListItem>Fournir et gérer le service</ListItem>
          <ListItem>Pour vous informer des modifications apportées à notre service</ListItem>
          <ListItem>Pour vous permettre de participer aux fonctionnalités interactives de notre service lorsque vous le souhaitez</ListItem>
          <ListItem>Assurer l'assistance et le support client</ListItem>
          <ListItem>Fournir des analyses ou des informations précieuses afin que nous puissions améliorer le service</ListItem>
          <ListItem>Pour surveiller l'utilisation du service</ListItem>
          <ListItem>Détecter, prévenir et résoudre les problèmes techniques</ListItem>
        </List>
      </Section>

      <Subtitle>Transfert de données</Subtitle>
      <Section>
        <Paragraph>
          Vos informations, y compris vos données personnelles, peuvent être transférées et conservées sur des ordinateurs situés en dehors de votre état, province, pays ou autre juridiction gouvernementale où les lois sur la protection des données peuvent différer de celles de votre juridiction.
        </Paragraph>
        <Paragraph>
          Si vous résidez hors de France et que vous choisissez de nous fournir des informations, veuillez noter que nous transférons les données, y compris les données à caractère personnel, vers la France et les traitons là-bas.
        </Paragraph>
        <Paragraph>
          Votre consentement à cette politique de confidentialité, suivi de votre soumission de telles informations, représente votre acceptation de ce transfert.
        </Paragraph>
        <Paragraph>
          Afrilangues prendra toutes les mesures raisonnablement nécessaires pour garantir le traitement sécurisé de vos données, conformément à la présente politique de confidentialité. Aucun transfert de vos données personnelles ne sera effectué vers une organisation ou un pays, à moins que des contrôles adéquats ne soient en place, y compris: sécurité de vos données et autres informations personnelles.
        </Paragraph>
      </Section>

      <Subtitle>Divulgation des données</Subtitle>
      <Section>
        <Subtitle>Conditions légales</Subtitle>
        <Paragraph>
          Afrilangues peut divulguer vos données personnelles en croyant de bonne foi qu'une telle action est nécessaire pour:
        </Paragraph>
        <List>
          <ListItem>Pour respecter une obligation légale</ListItem>
          <ListItem>Protéger et défendre les droits ou la propriété d’Afrilangues</ListItem>
          <ListItem>Pour prévenir ou étudier les éventuels actes fautifs liés au service</ListItem>
          <ListItem>Pour protéger la sécurité personnelle des utilisateurs du service ou du public</ListItem>
          <ListItem>Protéger contre toute responsabilité juridique</ListItem>
        </List>
      </Section>

      <Subtitle>Sécurité des données</Subtitle>
      <Section>
        <Paragraph>
          La sécurité de vos données est importante pour nous, mais n'oubliez pas qu'aucune méthode de transmission sur Internet, ni aucune méthode de stockage électronique, n'est sécurisée à 100%. Nous nous efforçons d'utiliser des moyens commercialement acceptables pour protéger vos données personnelles, mais nous ne pouvons pas garantir leur sécurité absolue.
        </Paragraph>
      </Section>

      <Subtitle>Fournisseurs de services</Subtitle>
      <Section>
        <Paragraph>
          Nous pouvons faire appel à des sociétés tierces et à des particuliers pour faciliter notre Service ("Fournisseurs de services"), pour fournir le Service en notre nom, pour fournir des services connexes ou pour nous aider à analyser l'utilisation de notre Service.
        </Paragraph>
        <Paragraph>
          Ces tiers n'ont accès à vos données personnelles que pour effectuer ces tâches pour notre compte et sont tenus de ne pas les divulguer ni les utiliser à d'autres fins.
        </Paragraph>
      </Section>

      <Subtitle>Analytics</Subtitle>
      <Section>
        <Paragraph>
          Nous pouvons utiliser des fournisseurs de service tiers pour contrôler et analyser l'utilisation de notre service.
        </Paragraph>
        <List>
          <ListItem>
            <strong>Google Analytics</strong><br />
            Google Analytics est un service d'analyse de site internet proposé par Google qui permet de suivre et de signaler le trafic sur le site Web. Google utilise les données collectées pour suivre et contrôler l'utilisation de notre service. Ces données sont partagées avec d'autres services Google. Google peut utiliser les données collectées pour contextualiser et personnaliser les annonces de son propre réseau de publicité.<br />
            Vous pouvez choisir de ne pas avoir rendu votre activité sur le service accessible à Google Analytics en installant le module complémentaire de navigateur pour la désactivation de Google Analytics. Ce module empêche le code JavaScript de Google Analytics (ga.js, analytics.js et dc.js) de partager des informations avec Google Analytics sur les visites.<br />
            Pour plus d'informations sur les pratiques de Google en matière de confidentialité, consultez la page Web <a href="https://policies.google.com/privacy?hl=fr">Google Privacy & Terms</a>.
          </ListItem>
        </List>
      </Section>

      <Subtitle>Liens vers d'autres sites</Subtitle>
      <Section>
        <Paragraph>
          Notre service peut contenir des liens vers d'autres sites que nous n'exploitons pas. Si vous cliquez sur un lien tiers, vous serez dirigé vers le site de ce tiers. Nous vous conseillons vivement de consulter la politique de confidentialité de chaque site que vous visitez.
        </Paragraph>
        <Paragraph>
          Nous n'exerçons aucun contrôle sur le contenu, les politiques de confidentialité ou les pratiques de tout site ou service tiers, et déclinons toute responsabilité à cet égard.
        </Paragraph>
      </Section>

      <Subtitle>Modifications de cette politique de confidentialité</Subtitle>
      <Section>
        <Paragraph>
          Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en affichant la nouvelle politique de confidentialité sur cette page.
        </Paragraph>
        <Paragraph>
          Nous vous informerons par e-mail et /ou d'un avis visible sur notre service avant l'entrée en vigueur du changement et mettrons à jour la "date d'entrée en vigueur" en haut de la présente politique de confidentialité.
        </Paragraph>
        <Paragraph>
          Nous vous conseillons de consulter périodiquement cette politique de confidentialité pour vous tenir informé de toute modification. Les modifications apportées à cette politique de confidentialité entrent en vigueur lorsqu'elles sont publiées sur cette page.
        </Paragraph>
      </Section>

      <Subtitle>Contactez-nous</Subtitle>
      <Section>
        <Paragraph>
          Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter:
        </Paragraph>
        <Paragraph>
          Par courrier électronique: <a href="mailto:contact@afrilangues.fr">contact@afrilangues.fr</a>
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Confidentiality;
