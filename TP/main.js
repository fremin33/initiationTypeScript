define(["require", "exports", "./personne", "./groupePersonne"], function (require, exports, personne_1, groupePersonne_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Création d'une instance de personne
    var firstPersonne = new personne_1.Personne(1, 'Fremin', 'Florian', 22);
    var secondPersonne = new personne_1.Personne(2, 'Rey', 'Alain', 47);
    // Appelle de la méthode de classe Tostring()
    firstPersonne.toString();
    secondPersonne.toString();
    // On crée une instance de GroupePersonne
    var groupPersonne = new groupePersonne_1.GroupePersonne('Group1');
    // On ajoute des élements à l'objet GroupPersonne
    groupPersonne.add(secondPersonne);
    groupPersonne.add(firstPersonne);
    // On supprime un élement à l'objet GroupPersonne
    groupPersonne.remove(1);
    // On appelle la méthode de classe toString()
    groupPersonne.afficher();
});
