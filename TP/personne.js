define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Personne = (function () {
        function Personne(id, nom, prenom, age) {
            this.id = id;
            this.nom = nom;
            this.prenom = prenom;
            this.age = age;
        }
        // Affiche les informations d'une Personne dans la console
        Personne.prototype.toString = function () {
            console.log(this.prenom + " " + this.nom + " \u00E0 " + this.age);
        };
        Object.defineProperty(Personne.prototype, "_nom", {
            // Getter pour l'attribut nom
            get: function () {
                return this.nom;
            },
            enumerable: true,
            configurable: true
        });
        return Personne;
    }());
    exports.Personne = Personne;
});
