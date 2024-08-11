import React from "react";
import styled from "styled-components";

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

const Annex = styled.div`
  border: 2px solid #000;
  padding: 20px;
  margin-top: 20px;
`;

const ConditionVentes = () => {
  return (
    <Container>
      <Title>Conditions Générales de Vente en ligne</Title>
      <Paragraph>
        Les présentes Conditions Générales de Vente sont à jour au 01/12/2022.
      </Paragraph>

      <Subtitle>Article 1. Définitions</Subtitle>
      <Paragraph>
        Les présentes Conditions Générales de Vente (ci-après « CGV ») sont
        proposées par la société AFRILANGUES (ci-après « La Société »), SASU au
        capital de 1000 euros, inscrite au Registre du commerce et des sociétés
        de PARIS sous le numéro 883723397, représentée par Idrissa KONTE, et
        dont le siège social est fixé au 17 RUE HEROLD, 75001 PARIS.
      </Paragraph>
      <Paragraph>
        Son numéro de téléphone non surtaxé est le 06 58 48 53 13, et son
        adresse électronique est contact@afrilangues.fr.
      </Paragraph>
      <Paragraph>
        La Société est propriétaire et éditeur du site internet
        https://www.afrilangues.com/fr. (ci-après « le Site »). Le Site est
        hébergé par AMAZON WEB SERVICES EMEA SARL, 38 AVENUE JOHN F. KENNEDY,
        L-1855 LUXEMBOURG, R.C.S. Luxembourg : B186284 - AMAZON WEB SERVICES
        EMEA SARL, SUCCURSALE FRANÇAISE, 31 PLACE DES COROLLES, TOUR CARPE DIEM,
        92400 COURBEVOIE, France, SIREN : 831 001 334 • RCS Nanterre • APE :
        6311Z • TVA : FR30831001334
      </Paragraph>
      <Paragraph>
        L’hébergeur est joignable par mail à l’adresse suivante :
        contact@amazon.com.
      </Paragraph>

      <Paragraph>
        Le Site propose au Client (ci-après « le Client ») la possibilité de
      </Paragraph>
      <List>
        <ListItem>
          Des cours de langues en ligne, en présentiel et par visio-conférence
        </ListItem>
        <ListItem>Un service d'interprétariat</ListItem>
        <ListItem>
          Un service de traduction de supports écrits, audio ou vidéo
        </ListItem>
        <ListItem>La vente de livres et magazine</ListItem>
      </List>

      <Paragraph>(ci-après les « Produits/Services »).</Paragraph>

      <Paragraph>
        Avant toute utilisation du Site, le Client doit s’assurer qu’il dispose
        des moyens techniques et informatiques lui permettant d’utiliser le Site
        et de commander les Services et les Produits sur le Site, et que son
        navigateur permet un accès sécurisé au Site. Le Client doit également
        s’assurer que la configuration informatique de son matériel/équipement
        est en bon état et ne contient pas de virus.
      </Paragraph>

      <Subtitle>Article 2. Application et opposabilité des cgv</Subtitle>
      <Paragraph>
        Les présentes CGV ont pour objet de définir l’ensemble des conditions
        dans lesquelles la Société commercialise les Services et les Produits
        tels que proposés à la vente sur le Site aux Clients. Elles s’appliquent
        donc à toute Commande (ci-après « Commande ») de Services et Produits
        passée sur le Site par le Client.
      </Paragraph>
      <Paragraph>
        Le Client déclare avoir pris connaissance et accepté les présentes CGV
        avant la passation de sa Commande.
      </Paragraph>
      <Paragraph>
        La validation de la Commande vaut donc acceptation de ces CGV. Celles-ci
        sont régulièrement mises à jour, les CGV applicables sont celles en
        vigueur sur le Site à la date de passation de la Commande.
      </Paragraph>
      <Paragraph>
        Toute condition contraire posée par le Client serait donc, à défaut
        d’acceptation expresse, inopposable à la Société quel que soit le moment
        où elle aura pu être portée à sa connaissance.
      </Paragraph>
      <Paragraph>
        Le fait que la Société ne se prévale pas à un moment donné d’une
        quelconque disposition des présentes CGV ne peut être interprété comme
        valant renonciation à se prévaloir ultérieurement d’une quelconque
        disposition desdites CGV.
      </Paragraph>

      <Subtitle>
        Article 3. Commande de Services et Produits sur le site
      </Subtitle>
      <Paragraph>
        La Société se réserve le droit de corriger le contenu du Site à tout
        moment.
      </Paragraph>
      <Paragraph>
        Le Client peut trouver sur la page du produit la période pendant
        laquelle, ou la date jusqu’à laquelle, les pièces détachées
        indispensables à l’utilisation du produit sont disponibles sur le
        marché.
      </Paragraph>
      <Paragraph>
        Les Services et Produits proposé(s) à la vente sont décrits et présentés
        avec la plus grande exactitude possible. Néanmoins, une variation minime
        dans la couleur du ou des produit(s) n’engage pas la responsabilité de
        la Société et n’affecte pas la validité de la vente.
      </Paragraph>
      <Paragraph>
        Le Client sélectionne le ou les Services et Produits qu’il souhaite
        acheter, et peut accéder à tout moment au récapitulatif de sa Commande.
      </Paragraph>
      <Paragraph>
        Le récapitulatif de la Commande présente la liste du ou des Services et
        Produits que le Client a sélectionné(s), et comprend les éventuels frais
        annexes tels que le prix de livraison venant s’ajouter au prix du ou des
        Services et Produits de la Commande. Le Client a la possibilité de
        modifier sa Commande et de corriger d’éventuelles erreurs avant de
        procéder à l’acceptation de sa Commande.
      </Paragraph>
      <Paragraph>
        Après avoir accédé au récapitulatif de sa Commande, le Client confirme
        l’acceptation de sa Commande en cochant la case de validation des CGV,
        puis en cliquant sur l’icône de validation de la Commande. La mention «
        Commande avec obligation de paiement » ou une formule analogue dénuée de
        toute ambiguïté figure à côté de l’icône de validation de la Commande
        afin de s’assurer que le Client reconnaît explicitement son obligation
        de paiement de la Commande.
      </Paragraph>
      <Paragraph>
        Après acceptation des CGV et validation de la Commande avec obligation
        de paiement, le contrat est valablement conclu entre la Société et le
        Client et les engage de manière irrévocable.
      </Paragraph>
      <Paragraph>
        Après la validation de sa Commande et afin de pouvoir procéder au
        paiement, le Client saisit les coordonnées auxquelles il souhaite
        obtenir réception des Services et Produits, et de facturation si elles
        sont différentes. Le processus de livraison est décrit à l’article 5 des
        présentes CGV.
      </Paragraph>
      <Paragraph>
        La Société lui envoie alors une confirmation de Commande par email,
        reprenant les éléments du récapitulatif de sa Commande et les adresses
        de livraison et le cas échéant de facturation renseignées.
      </Paragraph>
      <Paragraph>
        Après avoir validé ses coordonnées de livraison et le cas échéant de
        facturation, le Client procède au paiement de sa Commande selon les
        modalités précisées ci-après.
      </Paragraph>

      <Subtitle>
        Article 4. Prix et conditions de paiement de la commande
      </Subtitle>
      <Paragraph>
        Les prix sont mentionnés sur le Site dans les descriptifs des Services
        et Produits, en euros et hors taxe et toutes taxes comprises.
      </Paragraph>
      <Paragraph>
        Le montant total est indiqué dans le récapitulatif de la Commande, avant
        que le Client n’accepte les présentes CGV, valide sa Commande, renseigne
        et valide ses coordonnées de livraison et le cas échéant de facturation
        et procède au paiement. Ce montant total est indiqué toutes taxes
        comprises.
      </Paragraph>
      <Paragraph>
        La Commande des Services et Produits sur le Site est payable en euros.
        La totalité du paiement doit être réalisée au jour de la Commande par le
        Client, par carte bancaire, sauf conditions particulières de vente
        acceptées expressément par le Client et la Société.
      </Paragraph>
      <Paragraph>
        En cas de paiement par carte bancaire, le Site utilise le système de
        sécurisation de Stripe, Paypal, prestataire spécialisé dans la
        sécurisation de paiement en ligne. Ce système garantit au Client la
        totale confidentialité de ses informations bancaires. La transaction
        bancaire par carte bancaire, réalisée entre le Client et le système
        sécurisé est donc entièrement cryptée et protégée. Les coordonnées
        bancaires du Client ne sont pas stockées informatiquement par la
        Société.
      </Paragraph>
      <Paragraph>
        Le Client garantit à la Société qu’il dispose des autorisations
        nécessaires pour utiliser le mode de paiement, lors de la passation de
        la Commande.
      </Paragraph>
      <Paragraph>
        La Société se réserve le droit de suspendre ou d’annuler toute exécution
        et/ou livraison d’une Commande, quelle que soit sa nature et son niveau
        d’exécution, en cas de défaut de paiement ou de paiement partiel de
        toute somme qui serait due par le Client à la Société, en cas d’incident
        de paiement, ou en cas de fraude ou tentative de fraude relative à
        l’utilisation du site et au paiement d’une Commande.
      </Paragraph>

      <Subtitle>Article 5. Utilisation des services/livraison</Subtitle>
      <Paragraph>
        Le ou les produit(s) proposé(s) sur le Site peuvent être livré(s) à
        destination de tout lieux.
      </Paragraph>
      <Paragraph>
        La Société s'engage à livrer le ou les produit(s) dans un délai
        n'excédant pas 3 à 15 jours ouvrés à compter de la date de Commande.
      </Paragraph>
      <Paragraph>
        Le Client est informé par email, lorsque sa Commande est prête, de son
        expédition. Le(s) produit(s) commandé(s) (sont) livré(s) à l’adresse de
        livraison indiquée par le Client lors de sa Commande dans les conditions
        précisées à l’article 3 des présentes CGV.
      </Paragraph>
      <Paragraph>
        Le Client doit s’assurer que les informations communiquées sont
        correctes, et qu’elles le restent jusqu’à complète livraison du ou des
        produit(s) commandé(s). Le Client s’engage donc à informer la Société de
        tout changement de coordonnées de facturation et/ou de livraison qui
        pourrait intervenir entre la Commande et la livraison, en envoyant, sans
        délai, un email à l’adresse email du service client. A défaut, en cas de
        retard et/ou d’erreur de livraison, le Client ne pourra en aucun cas
        engager la responsabilité de la Société en cas de défaut de livraison,
        et le service client de la Société contactera le Client pour une seconde
        livraison à la charge du Client.
      </Paragraph>
      <Paragraph>
        La Société ne sera pas non plus responsable si la non réception des
        Services et Produits est due au fait d’un tiers en dehors de son
        intervention ou en cas de vol.
      </Paragraph>
      <Paragraph>
        En cas de retour de la Commande en raison de l’absence du Client, le
        service client de la Société contactera le Client pour une seconde
        livraison à la charge du Client.
      </Paragraph>
      <Paragraph>
        Le Client pourra suivre la livraison de sa Commande en contactant le
        service client dont le numéro figure à l’article 6.2 des présentes CGV.
      </Paragraph>

      <Subtitle>Article 6. Service client</Subtitle>
      <Paragraph>
        Pour toute demande d’informations, de précisions ou pour toute
        réclamation, le Client doit contacter, en priorité, le service client de
        la Société, afin de permettre à ce dernier de tenter de trouver une
        solution au problème.
      </Paragraph>
      <Paragraph>
        Le service client de la Société est accessible de 9h à 17h30 en
        utilisant les coordonnées suivantes :
      </Paragraph>
      <List>
        <ListItem>Téléphone : 06 58 48 53 13</ListItem>
        <ListItem>Email : contact@afrilangues.fr</ListItem>
        <ListItem>Courrier : 17 RUE HEROLD, 75001 PARIS</ListItem>
      </List>

      <Subtitle>Article 7. Garanties légales et commerciales</Subtitle>
      <Paragraph>
        Tous les produits proposés par la Société sont soumis à la garantie
        légale de conformité prévue par la loi, et notamment les articles
        L.217-4, L.217-5 et L.217-12 du Code de la consommation, et à la
        garantie des vices cachés prévue par les articles 1641 et 1648, premier
        alinéa, du Code Civil :
      </Paragraph>
      <Paragraph>
        Le produit non conforme fera l’objet d’un remplacement ou d’une
        réparation selon les modalités de coûts prévues par le Code de la
        consommation.
      </Paragraph>
      <Paragraph>
        La garantie légale de conformité s’applique indépendamment de la
        garantie commerciale éventuellement consentie.
      </Paragraph>
      <Paragraph>Ainsi le Client :</Paragraph>
      <List>
        <ListItem>
          (i) bénéficie d’un délai de deux (2) ans à compter de la délivrance du
          produit pour agir en défaut de conformité du Produit
        </ListItem>
        <ListItem>
          (ii) est dispensé de rapporter la preuve de l’existence du défaut de
          conformité du bien durant les dix (6) mois suivant la délivrance du
          produit,
        </ListItem>
        <ListItem>
          (iii) peut choisir entre la réparation ou le remplacement du produit,
          sous réserve des conditions de coût prévues par l’article L. 217-9 du
          code de la consommation.
        </ListItem>
      </List>
      <Paragraph>
        En outre, le Client peut également mettre en œuvre la garantie légale au
        titre des vices cachés de la chose vendue, au sens des articles 1641 et
        suivants du Code civil. La garantie légale des vices cachés permet au
        Client dans un délai de deux ans à compter de la découverte du vice, le
        remboursement d’un Produit qui s’est révélé impropre à son usage.
      </Paragraph>
      <Paragraph>
        La garantie des vices cachés permet au Client d’être protégé contre les
        défauts cachés du produit acheté et qui en empêchent l’usage ou
        l’affectant à un point tel que le Client ne l’aurait pas acheté.
      </Paragraph>
      <Paragraph>
        Le Client a alors le choix entre deux options : garder le produit et
        demander une réduction du prix, ou rendre le produit et demander le
        remboursement du prix payé, conformément à l’article 1644 du Code civil.
      </Paragraph>

      <Subtitle>Il est rappelé les dispositions légales suivantes :</Subtitle>
      <Paragraph>
        Art. L217-4 du Code de la Consommation : ’’Le vendeur livre un bien
        conforme au contrat et répond des défauts de conformité existant lors de
        la délivrance. Il répond également des défauts de conformité résultant
        de l'emballage, des instructions de montage ou de l'installation lorsque
        celle-ci a été mise à sa charge par le contrat ou a été réalisée sous sa
        responsabilité.’’
      </Paragraph>
      <Paragraph>
        Art. L217-5 du Code de la Consommation : ’’ Le bien est conforme au
        contrat : 1° S'il est propre à l'usage habituellement attendu d'un bien
        semblable et, le cas échéant (a) s'il correspond à la description donnée
        par le vendeur et possède les qualités que celui-ci a présentées à
        l'acheteur sous forme d'échantillon ou de modèle ; (b) s'il présente les
        qualités qu'un acheteur peut légitimement attendre eu égard aux
        déclarations publiques faites par le vendeur, par le producteur ou par
        son représentant, notamment dans la publicité ou l'étiquetage ; 2° Ou
        s'il présente les caractéristiques définies d'un commun accord par les
        parties ou est propre à tout usage spécial recherché par l'acheteur,
        porté à la connaissance du vendeur et que ce dernier a accepté. ’’
      </Paragraph>
      <Paragraph>
        Art. L217-7 du Code de la Consommation : ’’ Les défauts de conformité
        qui apparaissent dans un délai de vingt-quatre mois à partir de la
        délivrance du bien sont présumés exister au moment de la délivrance,
        sauf preuve contraire. Pour les biens vendus d'occasion, ce délai est
        fixé à six mois. Le vendeur peut combattre cette présomption si celle-ci
        n'est pas compatible avec la nature du bien ou le défaut de conformité
        invoqué. ’’
      </Paragraph>
      <Paragraph>
        Art. L217-8 du Code de la Consommation : ’’ L'acheteur est en droit
        d'exiger la conformité du bien au contrat. Il ne peut cependant
        contester la conformité en invoquant un défaut qu'il connaissait ou ne
        pouvait ignorer lorsqu'il a contracté. Il en va de même lorsque le
        défaut a son origine dans les matériaux qu'il a lui-même fournis. ’’
      </Paragraph>
      <Paragraph>
        Art. L217-9 du Code de la Consommation : ’’ En cas de défaut de
        conformité, l'acheteur choisit entre la réparation et le remplacement du
        bien. Toutefois, le vendeur peut ne pas procéder selon le choix de
        l'acheteur si ce choix entraîne un coût manifestement disproportionné au
        regard de l'autre modalité, compte tenu de la valeur du bien ou de
        l'importance du défaut. Il est alors tenu de procéder, sauf
        impossibilité, selon la modalité non choisie par l'acheteur. ’’
      </Paragraph>
      <Paragraph>
        Art. L217-10 du Code de la Consommation : ’’ Si la réparation et le
        remplacement du bien sont impossibles, l'acheteur peut rendre le bien et
        se faire restituer le prix ou garder le bien et se faire rendre une
        partie du prix. La même faculté lui est ouverte : 1° Si la solution
        demandée, proposée ou convenue en application de l'article L. 217-9 ne
        peut être mise en œuvre dans le délai d'un mois suivant la réclamation
        de l'acheteur ; 2° Ou si cette solution ne peut l'être sans inconvénient
        majeur pour celui-ci compte tenu de la nature du bien et de l'usage
        qu'il recherche. La résolution de la vente ne peut toutefois être
        prononcée si le défaut de conformité est mineur. ’’
      </Paragraph>
      <Paragraph>
        Art. L217-11 du Code de la Consommation : ’’ L'application des
        dispositions des articles L. 217-9 et L. 217-10 a lieu sans aucun frais
        pour l'acheteur. Ces mêmes dispositions ne font pas obstacle à
        l'allocation de dommages et intérêts. ’’
      </Paragraph>
      <Paragraph>
        Art. L217-12 du Code de la Consommation : ’’L'action résultant du défaut
        de conformité se prescrit par deux ans à compter de la délivrance du
        bien. ’’
      </Paragraph>
      <Paragraph>
        Art. L217-13 du Code de la Consommation : ’’Les dispositions de la
        présente section ne privent pas l'acheteur du droit d'exercer l'action
        résultant des vices rédhibitoires telle qu'elle résulte des articles
        1641 à 1649 du code civil ou toute autre action de nature contractuelle
        ou extracontractuelle qui lui est reconnue par la loi. ’’
      </Paragraph>
      <Paragraph>
        Art. 1641 du Code Civil : ’’ Le vendeur est tenu de la garantie à raison
        des défauts cachés de la chose vendue qui la rendent impropre à l'usage
        auquel on la destine, ou qui diminuent tellement cet usage que
        l'acheteur ne l'aurait pas acquise, ou n'en aurait donné qu'un moindre
        prix, s'il les avait connus. ’’
      </Paragraph>
      <Paragraph>
        Art.1642 du Code Civil : ’’ Le vendeur n'est pas tenu des vices
        apparents et dont l'acheteur a pu se convaincre lui-même. ’’
      </Paragraph>
      <Paragraph>
        Art. 1643 du Code Civil : ’’ Il est tenu des vices cachés, quand même il
        ne les aurait pas connus, à moins que, dans ce cas, il n'ait stipulé
        qu'il ne sera obligé à aucune garantie.’’
      </Paragraph>
      <Paragraph>
        Art. 1644 du Code Civil : ’’ Dans le cas des articles 1641 et 1643,
        l'acheteur a le choix de rendre la chose et de se faire restituer le
        prix, ou de garder la chose et de se faire rendre une partie du prix. ’’
      </Paragraph>
      <Paragraph>
        Art. 1646 du Code Civil : ’’ Si le vendeur ignorait les vices de la
        chose, il ne sera tenu qu'à la restitution du prix, et à rembourser à
        l'acquéreur les frais occasionnés par la vente. ’’
      </Paragraph>
      <Paragraph>
        Art. 1648 du Code Civil : ’’ L'action résultant des vices rédhibitoires
        doit être intentée par l'acquéreur dans un délai de deux ans à compter
        de la découverte du vice. (…) ’’
      </Paragraph>
      <Paragraph>
        Si un Client estime avoir reçu un produit qu’il considère comme
        défectueux ou non-conforme, il devra contacter la Société, dans les plus
        brefs délais à compter de la réception de la Commande, à l’adresse
        électronique suivante : contact@afrilangues.fr, ou par courrier
        recommandé avec accusé de réception à l’adresse suivante : 17 RUE
        HEROLD, 75001 PARIS, en précisant le défaut ou la non-conformité en
        cause.
      </Paragraph>
      <Paragraph>
        Il appartiendra au Client de fournir toute justification quant à la
        désignation des vices apparents et/ou anomalies constatés. Le Client
        devra laisser à la Société toute facilité pour procéder à la
        constatation de ces vices ou non conformités et pour y porter remède le
        cas échéant. Il s’abstiendra d’intervenir lui-même ou de faire
        intervenir un tiers à cette fin.
      </Paragraph>
      <Paragraph>
        Si les vices et/ou anomalies sont confirmés par la Société, celle-ci
        adressera alors au Client ses instructions sur la manière de procéder
        après avoir pris connaissance de la réclamation ainsi formulée et, le
        cas échéant, procédera au remplacement du produit dont la Société aurait
        été amenée à constater le défaut de conformité, ou la défectuosité.
      </Paragraph>
      <Paragraph>
        Dans le cas où l’échange du produit serait impossible, la Société sera
        tenue de rembourser le Client dans les quatorze jours suivant la
        réception du produit. Le remboursement s’effectuera sur proposition de
        la Société par crédit sur le compte bancaire du Client, le Client
        pouvant opter pour un autre mode de remboursement que celui proposé.
      </Paragraph>

      <Subtitle>Article 8. Obligations du client</Subtitle>
      <Paragraph>
        Le Client s’engage à respecter les termes des présentes CGV.
      </Paragraph>
      <Paragraph>
        Le Client s’engage à utiliser le Site et les services de manière
        conforme aux instructions de la Société.
      </Paragraph>
      <Paragraph>
        Le Client convient qu’il n’utilise le Site que pour son usage personnel,
        conformément aux présentes CGV. A cet égard, le Client convient de
        s’abstenir :
      </Paragraph>
      <List>
        <ListItem>
          D’utiliser le Site de toute manière illégale, pour toute finalité
          illégale ou de toute manière incompatible avec ces CGV ;
        </ListItem>
        <ListItem>
          De vendre, copier, reproduire, louer, prêter, distribuer, transférer
          ou concéder sous sous-licence tout ou partie des contenus figurant sur
          le Site ou de décompiler, désosser, désassembler, modifier, afficher
          sous forme lisible par le Client, tenter de découvrir tout code source
          ou utiliser tout logiciel activant ou comprenant tout ou partie du
          Site ;
        </ListItem>
        <ListItem>
          De tenter d’obtenir l’accès non autorisé au système informatique du
          Site ou de se livrer à toute activité perturbant, diminuant la qualité
          ou interférant avec les performances ou détériorant les
          fonctionnalités du Site ;
        </ListItem>
        <ListItem>
          D’utiliser le Site à des fins abusives en y introduisant
          volontairement des virus ou tout autre programme malveillant et de
          tenter d’accéder de manière non autorisée au Site ;
        </ListItem>
        <ListItem>
          De porter atteinte aux droits de propriété intellectuelle de la
          Société et/ou de revendre ou de tenter de revendre les produits à des
          tiers ;
        </ListItem>
        <ListItem>
          De dénigrer le Site et/ou les produits ainsi que la Société sur les
          réseaux sociaux et tout autre moyen de communication.
        </ListItem>
      </List>
      <Paragraph>
        Si, pour un quelconque motif, la Société considère que le Client ne
        respecte pas les présentes CGV, la Société peut à tout moment, et à son
        entière discrétion, supprimer son accès au Site et prendre toutes
        mesures incluant toute action judiciaire civile et pénale à son
        encontre.
      </Paragraph>

      <Subtitle>Article 9. Droit de rétractation</Subtitle>
      <Paragraph>
        Conformément aux articles L.221-18 et suivants du Code de la
        consommation, le Client dispose d’un délai de 14 jours à compter de la
        réception du dernier produit commandé sur le Site pour exercer son droit
        de rétractation auprès de la Société, sans avoir à justifier de motifs
        ni à payer de pénalité.
      </Paragraph>
      <Paragraph>
        Tous les Produits/Services peuvent faire l’objet d’une rétractation,
        excepté ceux exclus par l’article L. 221-28 du Code de la consommation,
        reproduit ci-dessous :
      </Paragraph>
      <Paragraph>
        Le droit de rétractation ne peut être exercé pour les contrats :
      </Paragraph>
      <List>
        <ListItem>
          De fourniture de services pleinement exécutés avant la fin du délai de
          rétractation et dont l'exécution a commencé après accord préalable
          exprès du consommateur et renoncement exprès à son droit de
          rétractation ;
        </ListItem>
        <ListItem>
          De fourniture de biens ou de services dont le prix dépend de
          fluctuations sur le marché financier échappant au contrôle du
          professionnel et susceptibles de se produire pendant le délai de
          rétractation ;
        </ListItem>
        <ListItem>
          De fourniture de biens confectionnés selon les spécifications du
          consommateur ou nettement personnalisés ;
        </ListItem>
        <ListItem>
          De fourniture de biens susceptibles de se détériorer ou de se périmer
          rapidement ;
        </ListItem>
        <ListItem>
          De fourniture de biens qui ont été descellés par le consommateur après
          la livraison et qui ne peuvent être renvoyés pour des raisons
          d'hygiène ou de protection de la santé ;
        </ListItem>
        <ListItem>
          De fourniture de biens qui, après avoir été livrés et de par leur
          nature, sont mélangés de manière indissociable avec d'autres articles
          ;
        </ListItem>
        <ListItem>
          De fourniture de boissons alcoolisées dont la livraison est différée
          au-delà de trente jours et dont la valeur convenue à la conclusion du
          contrat dépend de fluctuations sur le marché échappant au contrôle du
          professionnel ;
        </ListItem>
        <ListItem>
          De travaux d'entretien ou de réparation à réaliser en urgence au
          domicile du consommateur et expressément sollicités par lui, dans la
          limite des pièces de rechange et travaux strictement nécessaires pour
          répondre à l'urgence ;
        </ListItem>
        <ListItem>
          De fourniture d'enregistrements audio ou vidéo ou de logiciels
          informatiques lorsqu'ils ont été descellés par le consommateur après
          la livraison ;
        </ListItem>
        <ListItem>
          De fourniture d'un journal, d'un périodique ou d'un magazine, sauf
          pour les contrats d'abonnement à ces publications ;
        </ListItem>
        <ListItem>Conclus lors d'une enchère publique ;</ListItem>
        <ListItem>
          De prestations de services d'hébergement, autres que d'hébergement
          résidentiel, de services de transport de biens, de locations de
          voitures, de restauration ou d'activités de loisirs qui doivent être
          fournis à une date ou à une période déterminée ;
        </ListItem>
        <ListItem>
          De fourniture d'un contenu numérique non fourni sur un support
          matériel dont l'exécution a commencé après accord préalable exprès du
          consommateur et renoncement exprès à son droit de rétractation.
        </ListItem>
      </List>
      <Paragraph>
        Pour exercer son droit de rétractation de la Commande le Client doit
        notifier sa décision de rétractation au moyen du formulaire de
        rétractation proposé en annexe des présentes ou au moyen d’une
        déclaration dénuée d’ambiguïté, sans justifier de motifs. Le Client peut
        communiquer sa décision de rétractation à la Société par tout moyen,
        notamment en l’envoyant par courrier à la Société à l’adresse suivante :
        17 RUE HEROLD, 75001 PARIS ou par courriel à contact@afrilangues.fr.
      </Paragraph>
      <Paragraph>
        En cas de notification à la Société par le Client de sa décision de
        rétractation, quel que soit le moyen employé, la Société lui enverra
        sans délai un accusé de réception de la rétractation sur un support
        durable (notamment par courriel).
      </Paragraph>
      <Paragraph>
        Le Client doit retourner le ou les produit(s) dans le même état que
        celui dans lequel il l’a ou les a reçu(s), et avec l’ensemble des
        éléments d’emballage, accessoires et notices (même si le(s) produit(s) a
        ou ont été déballé(s)), dans les meilleurs délais et au plus tard dans
        les 14 jours à compter de la notification de la décision de rétractation
        du présent contrat, à l’adresse suivante : 17 RUE HEROLD, 75001 PARIS.
        Conformément à la loi, le Client prend à sa charge les frais de retour
        du ou des produit(s).
      </Paragraph>
      <Paragraph>
        En cas de rétractation du Client, le remboursement du ou des Services et
        Produits qui a ou ont fait l’objet du droit de rétractation est effectué
        par la Société par le même moyen de paiement que celui utilisé pour la
        transaction initiale, sauf si le Client convient expressément d’un moyen
        différent. En tout état de cause, ce remboursement n’occasionnera pas de
        frais pour le Client. Le remboursement est opéré dans les meilleurs
        délais, et au plus tard 14 jours à compter du jour où la Société est
        informée de la décision du Client de rétractation de sa Commande.
      </Paragraph>
      <Paragraph>
        Conformément à l’article L.221-23 du Code de la consommation, le Client
        est informé que sa responsabilité n’est engagée à l’égard de la Société
        que pour une dépréciation du ou des produit(s), renvoyé(s) suite à
        l’exercice de son droit de rétractation, résultant de manipulations
        autres que celles nécessaires pour établir la nature, les
        caractéristiques et le bon fonctionnement de ce ou ces biens.
      </Paragraph>

      <Subtitle>Article 10. Responsabilité</Subtitle>
      <Paragraph>
        La Société met en œuvre toutes les mesures propres à assurer au Client
        la fourniture, dans des conditions optimales, de produit(s) de
        qualité/d’un ou de service(s) de qualité. Elle ne saurait cependant en
        aucun cas voir sa responsabilité engagée pour toute inexécution ou
        mauvaise exécution de tout ou partie des prestations prévues au contrat,
        qui serait imputable soit au Client, soit au fait imprévisible et
        insurmontable d’un tiers étranger au contrat, soit à un cas de force
        majeure. Plus généralement, si la responsabilité de la Société se
        trouvait engagée, elle ne pourrait en aucun cas accepter d’indemniser le
        Client pour des dommages indirects ou dont l’existence et/ou le quantum
        ne seraient pas établi par des preuves.
      </Paragraph>
      <Paragraph>
        La Société ne saura être tenue responsable des dommages causés par un
        mésusage d’un de ses Produits / Services ou par non-respect des
        précautions d’utilisation et conditions d’hygiène, de stockage et de
        sécurité lors de l’utilisation d’un de ses Produits/Services.
      </Paragraph>
      <Paragraph>
        Le Site peut contenir des liens vers d’autres sites non édités ni
        contrôlés par la Société, qui ne pourra être tenue pour responsable du
        fonctionnement, du contenu ou de tout élément présent ou obtenu par
        l’intermédiaire de ces sites.
      </Paragraph>
      <Paragraph>
        La mise en place de tels liens ou la référence à toutes informations,
        articles ou services fournis par une tierce personne, ne peut et ne doit
        pas être interprétée comme un aval exprès ou tacite, par la Société, de
        ces sites et de ces éléments ni de leurs contenus.
      </Paragraph>
      <Paragraph>
        La Société n’est pas responsable de la disponibilité de ces sites et ne
        peut en contrôler le contenu ni valider la publicité, le ou les
        produit(s)/le ou les service(s) et autres informations diffusées sur ces
        sites internet.
      </Paragraph>
      <Paragraph>
        Il est expressément stipulé que la Société ne pourra en aucun cas être
        tenue responsable, de quelque manière que ce soit, pour le cas où le
        matériel informatique ou la messagerie électronique des Clients
        rejetterait, par exemple du fait d’un anti-spam, les courriers
        électroniques adressés par la Société, et notamment, sans que cette
        liste ne soit exhaustive, la copie du ticket de paiement, l’état
        récapitulatif de la Commande ou encore le courrier électronique de suivi
        d’expédition.
      </Paragraph>
      <Paragraph>
        Le Client a pleinement conscience des dispositions du présent article et
        notamment des garanties et limitations de responsabilité susvisées,
        conditions essentielles sans lesquelles la Société n’aurait jamais
        contracté.
      </Paragraph>

      <Subtitle>Article 11. Sécurité</Subtitle>
      <Paragraph>
        Le Client s’engage à ne pas porter atteinte à la sécurité du Site. A
        cette fin, il s’engage à ne pas procéder à tout accès et/ou maintien
        frauduleux dans le système d’information de la Société. Le Client ne
        peut non plus porter atteinte ou entraver le système d’information de la
        Société. A défaut, la Société pourra prendre à son encontre toute mesure
        et notamment engager sa responsabilité pénale au titre des articles
        323-1 et suivants du Code pénal.
      </Paragraph>

      <Subtitle>
        Article 12. Propriété intellectuelle et données personnelles
      </Subtitle>
      <Paragraph>
        L’ensemble des éléments de ce Site et le Site lui-même, sont protégés
        par le droit d’auteur, le droit des marques, des dessins et modèles
        et/ou tous autres droits de propriété intellectuelle. Ces éléments sont
        la propriété exclusive de la Société. L’ensemble de ces droits est
        réservé pour le monde entier.
      </Paragraph>
      <Paragraph>
        Le nom et la marque les logos, les dessins et modèles, lettres
        stylisées, marques figuratives, et tous les signes représentés sur ce
        Site sont et demeureront la propriété exclusive de la Société.
      </Paragraph>
      <Paragraph>
        Aucun titre ni droit quelconque sur aucun élément ou logiciel ne sera
        obtenu par téléchargement ou copie d’éléments de ce Site. Il est
        formellement interdit au Client de reproduire (à part pour son
        utilisation personnelle et non commerciale), publier, éditer,
        transmettre, distribuer, montrer, enlever, supprimer, ajouter à ce Site
        et aux éléments et logiciels qu’il contient, pas plus que les modifier
        ou effectuer un quelconque travail en les prenant pour base, ni vendre
        ou participer à aucune vente en rapport avec ce Site, les éléments de ce
        Site ni aucun logiciel y afférant.
      </Paragraph>
      <Paragraph>
        La Société concède au Client une licence non exclusive pour utiliser le
        Site. Cette licence est strictement personnelle et ne peut en aucun cas
        être cédée ou transférée à quel que tiers que ce soit. La licence est
        concédée pour la durée d’utilisation du Site.
      </Paragraph>
      <Paragraph>
        Toute utilisation par le Client des dénominations sociales, marques et
        signes distincts appartenant à la Société est strictement prohibée sauf
        en cas d’accord exprès et préalable de la Société.
      </Paragraph>
      <Paragraph>
        La Société comprend que la protection des données et de la vie privée
        est un enjeu pour l’ensemble des internautes visitant le Site. La
        Société s’engage, conformément à la réglementation RGPD, à respecter
        votre vie privée et à protéger vos données à caractère personnel, c’est
        à dire susceptible de vous identifier directement ou indirectement en
        tant que personne.
      </Paragraph>
      <Paragraph>
        Dans le cadre de la commande, la Société a vocation à récolter des
        données personnelles du Client. La Société s’engage à protéger les
        données à caractère personnel des clients.
      </Paragraph>
      <Paragraph>
        Les fichiers comportant des données à caractère personnel nécessaires
        pour la commande sont notamment conservés sur les serveurs de
        l’hébergeur du Site. Ce prestataire assure être en conformité avec les
        prescriptions du règlement général sur la protection des données (RGPD).
        La Société ne communique pas et ne fait pas commerce des données
        personnelles des clients.
      </Paragraph>
      <Paragraph>
        Au stade de la commande sur le Site, le Client consent expressément à la
        collecte et au traitement de ses données à caractère personnel
        nécessaires pour effectuer les commandes.
      </Paragraph>
      <Paragraph>
        Les données personnelles récoltées par la Société ont pour objet de
        permettre la réalisation de la commande. Les différentes données à
        caractère personnelles ne seront pas conservées plus longtemps que
        nécessaire aux fins pour lesquelles elles ont été récoltées, y compris
        au regard du respect des obligations légales ou fiscales.
      </Paragraph>
      <Paragraph>
        Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978,
        telle que modifiée par la loi n°2004-801 du 6 août 2004 dite «
        Informatique et Libertés », et au règlement général sur la protection
        des données (RGPD), sous réserve de justifier de votre identité, tout
        Client, quelle que soit sa nationalité, dispose d’un droit d’accès, de
        modification et de suppression de ses données à caractère personnel.
        Chaque Client est également en droit de solliciter une limitation du
        traitement de ses données et dispose, par ailleurs, d’un droit à la
        portabilité des données ainsi que d’un droit d’opposition au traitement
        des données à caractère personnel le concernant.
      </Paragraph>
      <Paragraph>
        Aux fins d’application de la présente clause et, notamment, de s’assurer
        du traitement de confidentialité des données des Clients, la Société a
        désigné, conformément aux dispositions du règlement général sur la
        protection des données (RGPD), un délégué à la protection des données,
        qu’il est possible de contacter à l’adresse suivante :
        contact@afrilangues.fr
      </Paragraph>
      <Paragraph>
        En tout état de cause, tout Client a le droit de faire toute réclamation
        auprès de la CNIL.
      </Paragraph>

      <Subtitle>Article 13. Newsletter</Subtitle>
      <Paragraph>
        En créant un compte ou en cochant la case prévue à cet effet ou en
        donnant expressément son accord à cette fin, le Client accepte que la
        Société puisse lui faire parvenir, à une fréquence et sous une forme
        déterminée par elle, une newsletter (lettre d’information) pouvant
        contenir des informations relatives à son activité.
      </Paragraph>
      <Paragraph>
        Lorsque le Client coche la case prévue à cet effet dans le processus
        d’inscription sur le Site pour passer la Commande, il accepte de
        recevoir des offres commerciales de la Société pour des
        Produits/Services analogues à ceux commandés.
      </Paragraph>
      <Paragraph>
        Les Clients auront la faculté de se désinscrire de la newsletter en
        cliquant sur le lien prévu à cet effet, présent dans chacune des
        newsletters (lettres d’information).
      </Paragraph>

      <Subtitle>
        Article 14. Liste d’opposition au démarchage téléphonique
      </Subtitle>
      <Paragraph>
        Le Client a la possibilité de s’inscrire gratuitement sur une liste
        d’opposition au démarchage téléphonique BLOCTEL (www.bloctel.gouv.fr)
        afin de ne plus être démarché téléphoniquement par un professionnel avec
        lequel il n’a pas de relation contractuelle en cours, conformément à la
        loi n°2014-344 du 17 mars 2014 relative à la consommation.
      </Paragraph>
      <Paragraph>
        Tout consommateur a la possibilité de s’inscrire gratuitement sur cette
        liste sur le site https://conso.bloctel.fr/index.php/inscription.php.
      </Paragraph>

      <Subtitle>
        Article 15. Loi applicable et attribution de juridiction
      </Subtitle>
      <Paragraph>
        Les présentes CGV sont régies et interprétées conformément au droit
        français, sans tenir compte des principes de conflits de lois.
      </Paragraph>
      <Paragraph>
        En cas de litige susceptible de survenir à l’occasion de
        l’interprétation et/ou de l’exécution des présentes ou en relation avec
        les présentes CGV, le Client peut décider de soumettre le litige avec la
        Société à une procédure de médiation conventionnelle ou tout autre mode
        alternatif de règlement des différends.
      </Paragraph>

      <Annex>
        <Subtitle>Annexe 1 - FORMULAIRE DE RÉTRACTATION</Subtitle>
        <Paragraph>Société AFRILANGUES</Paragraph>
        <Paragraph>17 RUE HEROLD, 75001 PARIS</Paragraph>
        <Paragraph>contact@afrilangues.fr</Paragraph>
        <Paragraph>06 58 48 53 13</Paragraph>
        <Paragraph>
          Je vous notifie par la présente, ma rétractation du contrat portant
          sur la vente du ou des produit(s)/service(s) ci-après mentionné(s) :
        </Paragraph>
        <Paragraph>Commandé le :</Paragraph>
        <Paragraph>Reçu le :</Paragraph>
        <Paragraph>Numéro de commande :</Paragraph>
        <Paragraph>Nom du client :</Paragraph>
        <Paragraph>Adresse du client :</Paragraph>
        <Paragraph>Date :</Paragraph>
        <Paragraph>Signature du client :</Paragraph>
      </Annex>
    </Container>
  );
};

export default ConditionVentes;
