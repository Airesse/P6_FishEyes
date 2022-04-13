# PROJET OPENCLASSROOMS N°6 (Version 2) - FISHEYES

Lien vers le site du projet : [https://airesse.github.io/StephanieRoi_6_27092021/](https://airesse.github.io/StephanieRoi_6_27092021/)

## I. Scénario du projet : 
Nouveau Développeur junior chez Teachasite, une société de conseil spécialisée dans le développement de sites web et d'applications mobiles, on vous confie une mission.
La création d'un prototype de site web dynamique pour un nouveau client, l'entreprise FISHEYES-photographes indépendants. Les meilleurs travaux des photographes doivent être présentés.
L'accent devant être mis sur l'accessibilité du site aux utilisateurs malvoyants.


## II. Éléments fournis :

   1. Notes de réunion
   2. [Maquettes](https://www.figma.com/file/Q3yNeD7WTK9QHDldg9vaRl/UI-Design-FishEye-FR)
   3. [Repository Git Hub du développeur précedent](https://github.com/OpenClassrooms-Student-Center/Front-End-Fisheye)

## III. Livrables attendus :

   - Repository à partir d'un dépot forqué (le projet est dans un seul dossier).
   - Les codes HTML, CSS et Javascript sont dans des fichiers separés.
   - Page d'accueil : Liste de tous les photographes. Pour chacun doit apparaitre nom, slogan, localisation, prix/heure et une image miniature cliquable redirigeant vers ses travaux.
   - Le contenu de la page des photographes est généré de manière dynamique en fonction du photographe et affiche une galerie des médias du photographe (photos et vidéos) via des miniatures.
   - Chaque média comprend un titre et un nombre de likes cliquable et incrémentable.
   - Le nombre de likes total d’un photographe doit correspondre à la somme des likes de chacun de ses médias.
   - Les médias peuvent être triés par popularité ou par titre.
   - Lightbox : ouverture du média suite au clic sur sa miniature. La fenêtre est fermable par une croix et des boutons de navigation cliquables permettent de passer d'un élément média à l'autre.Les touches fléchées permettent également de naviguer entre les médias.
   - Formulaire de contact est accéssible via un bouton pour contacter le photographe. Il s'agit d'une modale comprenant des champs pour les noms, l'adresse électronique et un message. Le contenu des trois champs doit apparaitre dans les logs de la console.
   - Accéssibilité :  Utilisation des éléments HTML "sémantiques", ajout des attributs ARIA pour les éléments , les images présentent un attribut “alt” rempli (le titre des photos ou nom du photographe). Toute la gestion des événements (par exemple, les clics et les pressions au clavier) doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.).


## Contraintes techniques additionnelles :

- Editeur de code utilisé : Visual Studio Code.
- Utilisation de ESLint avec les paramètres par défaut.
- Utilisation d'une version ES6 ou supérieure de Javascript sans emploi de   fonctionnalités obsolètes.
- Pas d'utilisation de framework/librairie JS autorisé.
- Le code doit être lisible (les noms des variables et fonctions sont parlants) et commenté.
- Le code doit passer les tests AChecker sans “known issue” (afin qu'il soit
conforme aux WCAG).

## Autres Informations :

- Le site n'a pas besoin d'être responsive en mobile.
- Utilisation du framework CSS Sass.


