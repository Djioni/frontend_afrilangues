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

const MentionLegales = () => {
  return (
    <Container>
      <Title>Identification de l'Éditeur</Title>
      <Section>
        <Paragraph>
          Le site Afrilangues (ci-après « le Site »), accessible à l’adresse <a href="https://www.afrilangues.com/">https://www.afrilangues.com/</a> est édité par la société AFRILANGUES (ci-après « l'Éditeur »), SASU au capital de 1000.0 euros, dont le siège social est situé 17 RUE HEROLD, 75001 PARIS. Il est immatriculé au RCS de PARIS sous le numéro 883723397. TVA intracommunautaire n° FR56883723397
        </Paragraph>
        <Paragraph>
          L'Éditeur peut être contacté à l’adresse mail <a href="mailto:contact@afrilangues.fr">contact@afrilangues.fr</a> ou au numéro 06 58 48 53 13.
        </Paragraph>
      </Section>

      <Subtitle>Hébergeur du site internet</Subtitle>
      <Section>
        <Paragraph>
          Le site Afrilangues est hébergé par AMAZON WEB SERVICES EMEA SARL, 38 AVENUE JOHN F. KENNEDY, L-1855 LUXEMBOURG, R.C.S. Luxembourg : B186284 - AMAZON WEB SERVICES EMEA SARL, SUCCURSALE FRANÇAISE, 31 PLACE DES COROLLES, TOUR CARPE DIEM, 92400 COURBEVOIE, France, SIREN : 831 001 334 • RCS Nanterre • APE : 6311Z • TVA : FR30831001334
        </Paragraph>
        <Paragraph>
          L’hébergeur est joignable par mail à l’adresse suivante : <a href="mailto:contact@amazon.com">contact@amazon.com</a>.
        </Paragraph>
      </Section>

      <Subtitle>Collecte de données personnelles</Subtitle>
      <Section>
        <Paragraph>
          Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 modifiée, relative à l'informatique, aux fichiers et aux libertés, l’utilisateur est informé que l'Éditeur procède à la collecte et au traitement de données personnelles, lors de la connexion au Site.
        </Paragraph>
        <Paragraph>
          Les données collectées servent principalement à permettre la mise à disposition de la Plateforme, son optimisation et sa sécurisation afin d’offrir aux utilisateurs un service de la meilleure qualité possible. Des données supplémentaires pourront éventuellement être collectées par l'Éditeur pour permettre la bonne exécution de contrats commerciaux conclus par l’entremise de la Plateforme avec l’utilisateur.
        </Paragraph>
        <Paragraph>
          L’utilisateur est informé qu’il dispose d'un droit d'accès, d'interrogation, de modification et de suppression des informations qui le concernent, à exercer à tout moment auprès de l'Éditeur soit directement sur le Site, soit par courrier postal adressé au 17 RUE HEROLD, 75001 PARIS soit par e-mail à l’adresse <a href="mailto:contact@afrilangues.fr">contact@afrilangues.fr</a>.
        </Paragraph>
        <Paragraph>
          Les informations recueillies pourront éventuellement être partagées à des tiers résidant dans l’Union Européenne dans les cas suivants :
        </Paragraph>
        <List>
          <ListItem>Lorsque l’utilisateur publie, dans une zone de commentaire, des informations accessibles au public ;</ListItem>
          <ListItem>Lorsque l’utilisateur y consent expressément ;</ListItem>
          <ListItem>Lorsque la loi l’exige ou afin de coopérer à une enquête judiciaire à la demande exprès d’un détenteur de l’autorité publique ;</ListItem>
          <ListItem>Pour l’exécution de prestations commerciales pour lesquelles est rendue nécessaire la coopération d’un tiers, notamment dans le cas où l’Éditeur choisirait de sous-traiter certaines de ses prestations par l’entremise de Services Tiers.</ListItem>
        </List>
        <Paragraph>
          Lorsque certaines informations sont obligatoires pour accéder à des fonctionnalités spécifiques du Site, l'Éditeur indiquera ce caractère obligatoire au moment de la saisie des données.
        </Paragraph>
        <Paragraph>
          Les données personnelles collectées ne seront conservées que le temps nécessaire pour permettre la bonne utilisation du Site, empêcher les fraudes et abus, et satisfaire aux obligations légales et réglementaires de l'Éditeur concernant la gestion du Site.
        </Paragraph>
      </Section>

      <Subtitle>Cookies</Subtitle>
      <Section>
        <Paragraph>
          Le Site peut avoir recours à la technique des "cookies" telle que définie par la CNIL de la manière suivante :
        </Paragraph>
        <Paragraph>
          " Un cookie est un petit fichier stocké par un serveur dans le terminal (ordinateur, téléphone, etc.) d’un utilisateur et associé à un domaine web (c’est-à-dire dans la majorité des cas à l’ensemble des pages d’un même site web). Ce fichier est automatiquement renvoyé lors de contacts ultérieurs avec le même domaine.
        </Paragraph>
        <Paragraph>
          Les cookies ont de multiples usages : ils peuvent servir à mémoriser votre identifiant client auprès d'un site marchand, le contenu courant de votre panier d'achat, la langue d’affichage de la page web, un identifiant permettant de tracer votre navigation à des fins statistiques ou publicitaires, etc. ".
        </Paragraph>
        <Paragraph>
          Information issue du site officiel de la CNIL (<a href="https://www.cnil.fr/fr/glossaire">https://www.cnil.fr/fr/glossaire</a>)
        </Paragraph>
        <Paragraph>
          Ces cookies ont pour objectif de faciliter la navigation de l’utilisateur et d’améliorer la qualité du service proposé, en collectant des informations statistiques et relatives au trafic.
        </Paragraph>
        <Paragraph>
          L’utilisation de ces cookies est portée à la connaissance de l’utilisateur par le biais d’un bandeau lui demandant son consentement. Si l’utilisateur y consent, ce consentement est considéré comme valide pour une durée maximale de treize (13) mois.
        </Paragraph>
        <Paragraph>
          Si l’utilisateur ne consent pas à l’utilisation des cookies, l’Éditeur ne pourra lui garantir une expérience optimale sur le Site.
        </Paragraph>
        <Paragraph>
          Les cookies suivants sont utilisés sur le Site : Google Analytics, Pixel.
        </Paragraph>
      </Section>

      <Subtitle>Respect de la propriété intellectuelle</Subtitle>
      <Section>
        <Paragraph>
          Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner le Site, et plus généralement tous les éléments reproduits ou utilisés sur le Site, sont protégés par les lois en vigueur au titre de la propriété intellectuelle.
        </Paragraph>
        <Paragraph>
          Ils sont la propriété pleine et entière de l'Éditeur ou de ses partenaires, sauf mentions particulières. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de l'Éditeur, sont strictement interdites. Le fait pour l'Éditeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites.
        </Paragraph>
        <Paragraph>
          Seule l'utilisation pour un usage privé dans un cercle de famille est autorisée et toute autre utilisation est constitutive de contrefaçon et/ou d'atteinte aux droits voisins, sanctionnées par Code de la propriété intellectuelle.
        </Paragraph>
        <Paragraph>
          La reprise de tout ou partie de ce contenu nécessite l'autorisation préalable de l'Éditeur ou du titulaire des droits sur ce contenu.
        </Paragraph>
      </Section>

      <Subtitle>Liens hypertextes</Subtitle>
      <Section>
        <Paragraph>
          Le Site peut contenir des liens hypertextes donnant accès à d'autres sites web édités et gérés par des tiers et non par l'Éditeur. L'Éditeur ne pourra être tenu responsable directement ou indirectement dans le cas où lesdits sites tiers ne respecteraient pas les dispositions légales.
        </Paragraph>
        <Paragraph>
          La création de liens hypertextes vers le Site ne peut être faite qu'avec l'autorisation écrite et préalable de l'Éditeur.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default MentionLegales;
