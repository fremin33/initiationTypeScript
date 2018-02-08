export class Personne
{
    constructor(public id:number, private nom:string, public prenom:string, public age:number) {
    }

    // Affiche les informations d'une Personne dans la console
    toString():void {
        console.log(`${this.prenom} ${this.nom} à ${this.age}`);
    }

    // Getter pour l'attribut nom
    get _nom():string {
        return this.nom;
    }
}
