import { Personne } from "./personne";
import {GroupePersonne} from "./groupePersonne";
// Création d'une instance de personne
let firstPersonne:Personne = new Personne(1, 'Fremin', 'Florian', 22);
let secondPersonne:Personne = new Personne(2, 'Rey', 'Alain', 47);
// Appelle de la méthode de classe Tostring()
firstPersonne.toString();
secondPersonne.toString();

// On crée une instance de GroupePersonne
let groupPersonne:GroupePersonne = new GroupePersonne('Group1');
// On ajoute des élements à l'objet GroupPersonne
groupPersonne.add(secondPersonne);
groupPersonne.add(firstPersonne);
// On supprime un élement à l'objet GroupPersonne
groupPersonne.remove(1);
// On appelle la méthode de classe toString()
groupPersonne.afficher();