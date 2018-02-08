import {Personne} from "./personne";

export class GroupePersonne {
    public personnes: Array<Personne>;

    constructor(public nom: string) {
        this.personnes = [];
    }

    // Ajoute une instance de personne au tableau personne
    add(personne: Personne): void {
        this.personnes.push(personne)
    }

    // Récupère une instance à l'index number
    get(number: number): Personne {
        return this.personnes[number];
    }

    // Supprime une personne à l'index number
    remove(number: number): void {
        this.personnes.splice(number, 1);
    }

    afficher(): void {
        // for (let personne of this.personnes) {
        //     personne.toString()
        // }
        this.personnes.map(personne => personne.toString();
    )
    }
}