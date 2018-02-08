define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GroupePersonne = (function () {
        function GroupePersonne(nom) {
            this.nom = nom;
            this.personnes = [];
        }
        // Ajoute une instance de personne au tableau personne
        GroupePersonne.prototype.add = function (personne) {
            this.personnes.push(personne);
        };
        // Récupère une instance à l'index number
        GroupePersonne.prototype.get = function (number) {
            return this.personnes[number];
        };
        // Supprime une personne à l'index number
        GroupePersonne.prototype.remove = function (number) {
            this.personnes.splice(number, 1);
        };
        GroupePersonne.prototype.afficher = function () {
            // for (let personne of this.personnes) {
            //     personne.toString()
            // }
            this.personnes.map(function (personne) { return personne.toString(); });
        };
        return GroupePersonne;
    }());
    exports.GroupePersonne = GroupePersonne;
});
