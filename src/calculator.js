// ❌ Mauvais code avec plusieurs problèmes
var Calculator = function() {  // Utilisation de var
    var self = this;  // Variable inutile
    
    this.add = function(a, b) {
        if(a == null) return;  // Comparaison faible
        if(b == undefined) b = 0;  // Mauvaise gestion des undefined
        return a+b  // Manque de point-virgule et d'espaces
    }

    this.subtract = function(a, b) {
        return a-b  // Manque de point-virgule et d'espaces
    };

    // Bug de syntaxe et logique
    this.multiply = function(a, b) {
        if(a == 0) return 0;  // Comparaison faible
        return a  b  // Erreur de syntaxe (manque *)
    };

    // Code dupliqué
    this.duplicateAdd = function(x, y) {
        if(x == null) return;
        if(y == undefined) y = 0;
        return x+y
    }
}

exports = Calculator